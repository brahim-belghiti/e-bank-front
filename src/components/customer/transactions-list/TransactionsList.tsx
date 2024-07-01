import { DataTable } from "@/components/customer/transactions-list/data-table";
import { columns } from "@/components/customer/transactions-list/columns";
import { TTransactionData } from "@/types/transaction.types";
import { useTransactions } from "@/hooks/useGetTransactions";

function TranscationList({ accountId }: { accountId: string }) {
  const { data, isPending, isError } = useTransactions();
  const transactionsList: TTransactionData[] = data || [];
  const transactions = transactionsList.filter(
    (transaction) => accountId === transaction.account_id,
  );

  if (isError)
    return <div>Désole: Erreur lors de la tentative de récupération de la ressource.</div>;

  return (
    <section className="flex-grow">
      <DataTable columns={columns} data={transactions} isPending={isPending} />
    </section>
  );
}

export default TranscationList;
