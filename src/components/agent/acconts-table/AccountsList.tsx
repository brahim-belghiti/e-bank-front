import { useAccounts } from "@/hooks/useGetAccounts";
import { DataTable } from "@/components/agent/acconts-table/data-table";
import { columns } from "@/components/agent/acconts-table/columns";
import { TAccountData } from "@/types/account.types";

function AccountsList() {
  const { data, isPending, isError } = useAccounts();
  const accountsList: TAccountData[] = data || [];

  if (isError) return <div>Désole, lors de la tentative de récupération de la ressource. </div>;

  return (
    <section className="flex-grow">
      <DataTable columns={columns} data={accountsList} isPending={isPending} />
    </section>
  );
}

export default AccountsList;
