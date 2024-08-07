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
import { Textarea } from "@/components/ui/textarea";
import { TAccountData } from "@/types/account.types";
import { useAccounts } from "@/hooks/useGetAccounts";
import { useMemo } from "react";
import TransactionServices from "@/api/transaction";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "@tanstack/react-router";
import { formatDate } from "@/lib/helpers";

export const AddTranscation = () => {
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof transactionValidation>>({
    resolver: zodResolver(transactionValidation),
    defaultValues: {
      amount: 0,
      source: "",
      motif: "",
      target: "",
      typeOperation: "DEBIT",
      dateOperation: new Date(),
    },
  });

  const { data, isPending } = useAccounts();
  const getAccountsList = () => {
    return (!isPending && data) || [];
  };

  const accountsList: TAccountData[] = useMemo(getAccountsList, [data, isPending]);

  const doesExist = (iban: string) => {
    return accountsList.some((account) => account.iban === iban);
  };
  const targetAccountIban = form.watch("target");
  const SourceAccountIban = form.watch("source");

  const targetAccountData =
    doesExist(targetAccountIban) &&
    accountsList.find((account) => account.iban === targetAccountIban);
  const targetAccountId = targetAccountData?.id;

  const sourcAccountData =
    doesExist(SourceAccountIban) &&
    accountsList.find((account) => account.iban === SourceAccountIban);
  const sourceAccountId = sourcAccountData?.id;

  async function onSubmit(values: z.infer<typeof transactionValidation>) {
    const data = {
      ...values,
      dateOperation: formatDate(new Date()),
      target: targetAccountId,
      source: sourceAccountId,
    };
    const res = await TransactionServices.addTransaction(data);
    if (res.status === 500 || res.status === 400) {
      const test: string = "InsufficientFundsException";
      const moneytoOneself: string = "you can't send money to yourself";
      if (res.trace.includes(test)) {
        toast.error(" Source account does not have sufficient funds");
      } else if (res.trace.includes(moneytoOneself)) {
        toast.error("you can't send money to yourself");
      } else {
        toast.error("Une erreur est survenue lors d'ajout de la transaction, ressayer");
      }
    } else {
      toast.success("transaction ajouter avec succes");
      setTimeout(() => {
        navigate({ to: "/dashboard" });
      }, 1000);
    }
  }
  return (
    <main className="h-screen w-full flex justify-center items-center">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-8/12 space-y-4">
          <FormField
            control={form.control}
            name="source"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Compte à débiter</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Selectionner le client " />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {isPending ? (
                      <p>Chargement...</p>
                    ) : accountsList && accountsList.length > 0 ? (
                      accountsList.map((account: TAccountData) => (
                        <SelectItem key={account.id} value={account.iban}>
                          {account.iban}
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
            name="amount"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Le montant du virement</FormLabel>
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
            name="target"
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
          <FormField
            control={form.control}
            name="typeOperation"
            render={({ field }) => (
              <FormItem>
                <FormLabel>type d'operation</FormLabel>
                <Select onValueChange={field.onChange} defaultValue="DEBIT">
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Choisissez le compte à débiter" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="DEBIT">Débit</SelectItem>
                    {/* <SelectItem value="CREDIT">Crédit</SelectItem> */}
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
};
