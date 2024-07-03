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
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import { fr } from "date-fns/locale";
import TransactionServices from "@/api/transaction";
import toast from "react-hot-toast";
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
    console.log("🚀 ~ onSubmit ~ values:", values);
    const data = {
      ...values,
      dateOperation: formatDate(values.dateOperation),
      target: targetAccountId,
      source: sourceAccountId,
    };
    const res = await TransactionServices.addTransaction(data);
    if (res.status === 500 || res.status === 400) {
      toast.error("Une erreur est survenue, ressayer");
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
                    <SelectItem value="CREDIT">Crédit</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="dateOperation"
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
                      disabled={(date: Date) => date < new Date(new Date().setHours(0, 0, 0, 0))}
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
          <Button type="submit">Créer</Button>
        </form>
      </Form>
    </main>
  );
};
