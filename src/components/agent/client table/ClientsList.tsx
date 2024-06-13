import { DataTable } from "./data-table";
import { columns } from "./columns";
import { TCustomerData } from "@/types/customer.type";
import { useQuery } from "@tanstack/react-query";
import CustomerServices from "@/api/customer";

function ClientsList() {
  const { data, isPending, error, isError } = useQuery({
    queryKey: ["customers"],
    queryFn: CustomerServices.getCustomers,
  });
  const customersList: TCustomerData[] = data || [];

  if (isError) return <div>Error: {error?.message}</div>;

  return (
    <section className="flex-grow">
      <DataTable columns={columns} data={customersList} isPending={isPending} />
    </section>
  );
}

export default ClientsList;
