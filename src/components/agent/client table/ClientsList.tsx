import CustomerServices from "@/api/customer";
import { useQuery } from "@tanstack/react-query";
import { DataTable } from "./data-table";
import { columns } from "./columns";

function ClientsList() {
  const { data, isPending, error, isError } = useQuery({
    queryKey: ["customers"],
    queryFn: CustomerServices.getCustomers,
  });
  console.log("🚀 ~ ClientsList ~ query:", data);
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <section>
      <DataTable columns={columns} data={data} isPending={isPending} />
    </section>
  );
}

export default ClientsList;
