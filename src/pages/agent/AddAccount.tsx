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
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import accountValidation from "@/schemas/accountValidation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useCustomers } from "@/hooks/useGetCustomers";
import { TCustomerData } from "@/types/customer.types";
import AccountServices from "@/api/account";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "@tanstack/react-router";

function AddAccount() {
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof accountValidation>>({
    resolver: zodResolver(accountValidation),
    defaultValues: {
      iban: "",
      balance: 0,
    },
  });

  const { data, isPending } = useCustomers();
  const customers = data || [];
  const identityNumberSeleted = form.watch("identityNumber");
  const getSelectedCutomer: TCustomerData =
    customers.find(
      (customer: TCustomerData) => customer.identityNumber === identityNumberSeleted,
    ) || {};
  const selectedCustomerId = getSelectedCutomer.id;

  async function onSubmit(values: z.infer<typeof accountValidation>) {
    const data = {
      ...values,
      balance: Number(values.balance),
      customerId: Number(selectedCustomerId),
    };
    const res = await AccountServices.addAccount(data);
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
    <main className="h-screen w-full flex justify-center items-center">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-6/12 space-y-4">
          <FormField
            control={form.control}
            name="identityNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>N° d'indentité</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Selectionner le client " />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {isPending ? (
                      <p>Chargement...</p>
                    ) : customers && customers.length > 0 ? (
                      customers.map((customer: TCustomerData, index: number) => (
                        <SelectItem key={index} value={customer.identityNumber}>
                          {customer.identityNumber}
                        </SelectItem>
                      ))
                    ) : (
                      <p>Aucun client</p>
                    )}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="iban"
            render={({ field }) => (
              <FormItem>
                <FormLabel>RIB</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="balance"
            render={({ field }) => (
              <FormItem>
                <FormLabel>La balance</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="number"
                    min={0}
                    onChange={(value) => field.onChange(value.target.valueAsNumber)}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="status"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Status</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Selectionner le status " />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="CREATED">CRÉÉ</SelectItem>
                    <SelectItem value="ACTIVATED">ACTIVÉ</SelectItem>
                    <SelectItem value="SUSPENDED">SUSPENDU</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Créer</Button>
        </form>
      </Form>
      <Toaster />
    </main>
  );
}

export default AddAccount;
