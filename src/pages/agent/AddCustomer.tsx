import { addCustomerSchema } from "@/schemas/addCustomerValidation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
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

const AddCustomer = () => {
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof addCustomerSchema>>({
    resolver: zodResolver(addCustomerSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      identityNumber: "",
      phoneNumber: "",
      address: "",
      email: "",
    },
  });

  async function onSubmit(values: z.infer<typeof addCustomerSchema>) {
    const data = {
      ...values,
      username: "ken",
      password: "12345678",
      city: "rabat",
      codePostal: "12000",
      dateOfBirth: "2000-01-12",
    };

    const res = await CustomerServices.addCustomer(data);
    if (res.status === 500) {
      const test: string = "Duplicate entry";
      if (res.message.includes(test)) {
        toast.error("l'email ou le numéro d'identité existent déja sur la base des données");
      } else {
        toast.error("Une erreur est survenue lors de la création de nouveau utilisateur, ressayer");
      }
    } else {
      toast.success("client ajouter avec succes");
      navigate({ to: "/agent/dashboard" });
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
              name="phoneNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Numéro de téléphone</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
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

export default AddCustomer;
