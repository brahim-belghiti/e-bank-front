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
import transactionValidation from "@/schemas/transactionValidation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { TTransactionData } from "@/types/transaction.types";
import { Textarea } from "@/components/ui/textarea";

export const AddTranscation = () => {
  const form = useForm<z.infer<typeof transactionValidation>>({
    resolver: zodResolver(transactionValidation),
    defaultValues: {
      rib: "",
      amount: 0,
      accountId: "",
      motif: "",
      ribToCredit: "",
    },
  });

  async function onSubmit(values: z.infer<typeof TTransactionData>) {
    console.log("🚀 ~ onSubmit ~ values:", values);
  }
  return (
    <main className="h-screen w-full flex justify-center items-center">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-8/12 space-y-4">
          <FormField
            control={form.control}
            name="rib"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Le numéro du rib</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="accountId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Compte à débiter</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Choisissez le compte à débiter" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="m@example.com">compte1</SelectItem>
                    <SelectItem value="m@google.com">compte2</SelectItem>
                    <SelectItem value="m@support.com">compte3</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="amount"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Le montant du virement</FormLabel>
                <FormControl>
                  <Input {...field} min={0} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="ribToCredit"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Le rib du destinataire</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="motif"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Le motif</FormLabel>
                <FormControl>
                  <Textarea {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </main>
  );
};
