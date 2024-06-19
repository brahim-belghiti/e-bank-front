import { useAccounts } from "@/hooks/useGetAccounts";
import { DataTable } from "@/components/agent/acconts-table/data-table";
import { columns } from "@/components/agent/acconts-table/columns";
import { TAccountData } from "@/types/account.types";

function AccountsList() {
  const { data, isPending, error, isError } = useAccounts();
  const accountsList: TAccountData[] = data || [];

  if (isError) return <div>Error: {error?.message}</div>;

  return (
    <section className="flex-grow">
      <DataTable columns={columns} data={accountsList} isPending={isPending} />
    </section>
  );
}

export default AccountsList;
