import { DataTable } from "./data-table";
import { columns } from "./columns";
import { TCustomerData } from "@/types/customer.types";
import { useCustomers } from "@/hooks/useGetCustomers";

function ClientsList() {
  const { data, isPending, error, isError } = useCustomers();
  const customersList: TCustomerData[] = data || [];

  if (isError) return <div>Error: {error?.message}</div>;

  return (
    <section className="flex-grow">
      <DataTable columns={columns} data={customersList} isPending={isPending} />
    </section>
  );
}

export default ClientsList;
