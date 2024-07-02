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
import editAccoutValidation from "@/schemas/editAccountValidation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import AccountServices from "@/api/account";
import toast from "react-hot-toast";
import { useNavigate, useRouterState, HistoryState } from "@tanstack/react-router";
import { TAddAccount } from "@/types/account.types";

function EditAccount() {
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
}

export default EditAccount;

type TEditFormProps = {
  state: {
    account: TAddAccount;
    key: string;
  };
};

function EditForm({ state }: TEditFormProps) {
  const { account } = state;
  const navigate = useNavigate();
  const { iban, balance, status } = account;
  const form = useForm<z.infer<typeof editAccoutValidation>>({
    resolver: zodResolver(editAccoutValidation),
    defaultValues: {
      iban,
      balance,
      status,
    },
  });

  async function onSubmit(values: z.infer<typeof editAccoutValidation>) {
    console.log("🚀 ~ onSubmit ~ values:", values);
    const data = {
      ...values,
      balance: Number(balance),
      id: account.id,
    };

    const res = await AccountServices.updateAccount(data);
    if (res === 500) {
      toast.error("Une erreur est survenue lors de la modifaction du compte, ressayer");
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
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-6/12 space-y-4">
          {/* <FormField
            control={form.control}
            name="identityNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>N° d'indentité</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value} disabled>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Selectionner le client " />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value={field.value}>{field.value}</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          /> */}
          <FormField
            control={form.control}
            name="iban"
            render={({ field }) => (
              <FormItem>
                <FormLabel>RIB</FormLabel>
                <FormControl>
                  <Input {...field} disabled />
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
          <Button type="submit">Modifier</Button>
        </form>
      </Form>
    </main>
  );
}
