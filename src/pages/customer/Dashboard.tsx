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

  const accountsList = useMemo(getAccountsList, [data]);
  const [accountId, setAcountId] = useState("");
  useEffect(() => {
    if (accountsList.length > 0 && !accountId) {
      setAcountId(accountsList[0].id);
    }
  }, [accountsList, accountId]);
  const account = accountsList.find((account) => accountId === account.id);

  return (
    <main className="mt-16 p-4 px-12 w-full h-full flex flex-col gap-8">
      <section className="flex flex-col gap-2">
        <p className="text-sm text-gray-500">Visulaiser informations sur tous vos comptes</p>
        <Select defaultValue={account && account.iban} onValueChange={setAcountId}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="choisir compte" />
          </SelectTrigger>
          <SelectContent>
            {isPending ? (
              <p className="animate">...</p>
            ) : (
              accountsList.map((account: TAccountData) => (
                <SelectItem key={account.id} value={account.id}>
                  {account.iban}
                </SelectItem>
              ))
            )}
          </SelectContent>
        </Select>
      </section>
      <section className="flex justify-between items-center w-11/12">
        <div>
          <p className="text-sm text-gray-500">Le compte n° </p>
          <p className="text-2xl font-bold">{account && account.iban}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Solde bancaire </p>
          <p className="text-2xl font-bold">{account && account.balance}</p>
        </div>
      </section>
      <section>
        <TranscationList accountId={accountId} />
      </section>
    </main>
  );
};

export default Dashboard;
