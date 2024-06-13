import { DataTable } from "./data-table";
import { columns } from "./columns";
import { TCustomerData } from "@/types/customer.type";

type TClinetListProps = {
  data: TCustomerData[];
  isPending: boolean;
  isError: boolean;
  error: Error | null;
};

function ClientsList({ error, isError, data, isPending }: TClinetListProps) {
  if (isError) return <div>Error: {error?.message}</div>;

  return (
    <section className="flex-grow">
      <DataTable columns={columns} data={data} isPending={isPending} />
    </section>
  );
}

export default ClientsList;
