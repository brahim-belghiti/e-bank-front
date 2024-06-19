import { DataTable } from "@/components/customer/transactions-list/data-table";
import { columns } from "@/components/customer/transactions-list/columns";
import { TTransactionData } from "@/types/transaction.types";
import { useTransactions } from "@/hooks/useGetTransactions";

function TranscationList() {
  const { data, isPending, error, isError } = useTransactions();
  const transactionsList: TTransactionData[] = data || [];

  if (isError) return <div>Error: {error?.message}</div>;

  return (
    <section className="flex-grow">
      <DataTable columns={columns} data={transactionsList} isPending={isPending} />
    </section>
  );
}

export default TranscationList;
