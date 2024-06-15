import { addCustomerSchema } from "@/schemas/addCustomerValidation";
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
import { HistoryState, useNavigate, useRouterState } from "@tanstack/react-router";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";
import { TCustomerData } from "@/types/customer.type";
import { formatDate } from "@/lib/helpers";

const EditCustomer = () => {
  const state = useRouterState({ select: (s) => s.location.state }) || null;
  const isEmptyObject = (obj: HistoryState) => {
    return Object.keys(obj).length === 0;
  };

  return (
    <>
      {isEmptyObject(state) ? (
        <div className="mt-20 p-4">
          Un problem est servenue, si voulez changer les informations d'un client veuillez le
          chercher sur le tablea du bord est selectioner pour le modifer;
        </div>
      ) : (
        <EditForm state={state} />
      )}
    </>
  );
};

export default EditCustomer;

type TEditFormProps = {
  state: {
    customer: TCustomerData;
    key: string;
  };
};
const EditForm = ({ state }: TEditFormProps) => {
  console.log("🚀 ~ EditForm ~ state:", state);
  const { customer } = state;
  const navigate = useNavigate();
  const { firstname, lastname, identityNumber, dateOfBirth, address, email } = customer;
  const form = useForm<z.infer<typeof addCustomerSchema>>({
    resolver: zodResolver(addCustomerSchema),
    defaultValues: {
      firstname,
      lastname,
      identityNumber,
      address,
      email,
      dateOfBirth: new Date(dateOfBirth),
    },
  });

  async function onSubmit(values: z.infer<typeof addCustomerSchema>) {
    const data = {
      ...values,
      phoneNumber: "06666666",
      username: "ken",
      password: "12345678",
      city: "rabat",
      codePostal: "12000",
      dateOfBirth: formatDate(values.dateOfBirth),
      id: customer.id,
    };

    const res = await CustomerServices.updateCustomer(data);
    if (res === 500) {
      toast.error("Une erreur est survenue lors de la création de nouveau utilisateur, ressayer");
    } else {
      toast.success("client modifier avec succes");
      setTimeout(() => {
        navigate({ to: "/agent/dashboard" });
      }, 1000);
    }
  }

  return (
    <main className="h-screen w-full flex justify-center items-center">
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

          <Button className="w-full" type="submit">
            Soumettre
          </Button>
        </form>
      </Form>
      <Toaster />
    </main>
  );
};
