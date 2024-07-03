import TranscationList from "@/components/customer/transactions-list/TransactionsList";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useAccounts } from "@/hooks/useGetAccounts";
import { TAccountData } from "@/types/account.types";
import { useEffect, useMemo, useState } from "react";

const Dashboard = () => {
  const { data, isPending } = useAccounts();

  const getAccountsList = () => {
    return data || [];
  };

  const accountsList: TAccountData[] = useMemo(getAccountsList, [data]);
  const [accountIban, setAcountIban] = useState("");
  useEffect(() => {
    if (accountsList.length > 0 && !accountIban) {
      setAcountIban(accountsList[0].iban);
    }
  }, [accountsList, accountIban]);
  const account = accountsList.find((account) => {
    return accountIban === account.iban;
  });

  return (
    <main className="mt-16 p-4 px-12 w-full h-full flex flex-col gap-8">
      <section className="flex flex-col gap-2">
        <p className="text-sm text-gray-500">Visulaiser informations sur tous vos comptes</p>
        {isPending ? (
          ""
        ) : (
          <Select defaultValue={account && account.iban} onValueChange={setAcountIban}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="choisir compte" />
            </SelectTrigger>
            <SelectContent>
              {isPending ? (
                <p className="animate">...</p>
              ) : (
                accountsList.map((account: TAccountData) => (
                  <SelectItem key={account.id} value={account.iban}>
                    {account.iban}
                  </SelectItem>
                ))
              )}
            </SelectContent>
          </Select>
        )}
      </section>
      <section className="flex justify-between items-center w-11/12">
        <div>
          <p className="text-sm text-gray-500">Le compte avec le RIB: </p>
          <p className="text-2xl font-bold">{account && account.iban}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Solde bancaire </p>
          <p className="text-2xl font-bold">{account && account.balance}</p>
        </div>
      </section>
      <section>
        {isPending || account == null ? (
          <p className="animate">...</p>
        ) : (
          <TranscationList accountId={account.id} />
        )}
      </section>
    </main>
  );
};

export default Dashboard;
