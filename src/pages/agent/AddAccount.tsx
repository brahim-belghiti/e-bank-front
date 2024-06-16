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
import { useQueryClient } from "@tanstack/react-query";
import { TCustomerData } from "@/types/customer.type";

function AddAccount() {
  const form = useForm<z.infer<typeof accountValidation>>({
    resolver: zodResolver(accountValidation),
    defaultValues: {
      identityNumber: "",
      rib: "",
    },
  });

  async function onSubmit(values: z.infer<typeof accountValidation>) {
    console.log("🚀 ~ onSubmit ~ values:", values);
  }

  const queryclient = useQueryClient();
  const customers: TCustomerData[] | undefined = queryclient.getQueryData(["customers"]);
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
                    {customers &&
                      customers.map((customer) => (
                        <SelectItem key={customer.id} value={customer.identityNumber}>
                          {customer.identityNumber}
                        </SelectItem>
                      ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="rib"
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
          <Button type="submit">Créer</Button>
        </form>
      </Form>
    </main>
  );
}

export default AddAccount;
