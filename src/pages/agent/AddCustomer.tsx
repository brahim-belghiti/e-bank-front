import { customerValidation } from "@/schemas/customerValidation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormField,
  FormControl,
  FormLabel,
  FormMessage,
  FormItem,
} from "@/components/ui/form";
import CustomerServices from "@/api/customer";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "@tanstack/react-router";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";
import { formatDate } from "@/lib/helpers";
import { Separator } from "@/components/ui/separator";

const AddCustomer = () => {
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof customerValidation>>({
    resolver: zodResolver(customerValidation),
    defaultValues: {
      firstname: "",
      lastname: "",
      identityNumber: "",
      address: "",
      email: "",
      username: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof customerValidation>) {
    const data = {
      ...values,
      dateOfBirth: formatDate(values.dateOfBirth),
    };
    const res = await CustomerServices.addCustomer(data);
    if (res.status === 500 || res.status === 400) {
      const test: string = "Duplicate entry";
      if (res.message.includes(test)) {
        toast.error("l'email ou le numéro d'identité existent déja sur la base des données");
      } else {
        toast.error("Une erreur est survenue lors de la création de nouveau utilisateur, ressayer");
      }
    } else {
      toast.success("client ajouter avec succes");
      setTimeout(() => {
        navigate({ to: "/agent/dashboard" });
      }, 1000);
    }
  }
  return (
    <main className="h-full w-full flex justify-center items-center mt-8 py-8">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="w-full grid grid-cols-2 gap-4 items-center">
            <FormField
              control={form.control}
              name="firstname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Le prénom</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Le nom</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className=" w-full grid grid-cols-2 gap-4 items-center">
            <FormField
              control={form.control}
              name="identityNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Numéro d'identification (CIN, passeport, etc.)</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="dateOfBirth"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>La date de naissance</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-[240px] pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground",
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP", { locale: fr })
                          ) : (
                            <span>Choisissez une date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date: Date) =>
                          date > new Date() || date < new Date("1900-01-01")
                        }
                        initialFocus
                        locale={fr}
                      />
                    </PopoverContent>
                  </Popover>
                  {/* <FormDescription>Your date of birth is used to calculate your age.</FormDescription> */}
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Adresse</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Separator />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>L'address email</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Le username</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Le mot de passe</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button className="w-full" type="submit">
            Créer
          </Button>
        </form>
      </Form>
      <Toaster />
    </main>
  );
};

export default AddCustomer;
