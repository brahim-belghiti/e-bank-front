import ClientsList from "@/components/agent/client table/ClientsList";
import { useQuery } from "@tanstack/react-query";
import CustomerServices from "@/api/customer";

function AgentDashboard() {
  const { data, isPending, error, isError } = useQuery({
    queryKey: ["customers"],
    queryFn: CustomerServices.getCustomers,
  });

  return (
    <main className="flex h-full flex-col mt-16 gap-4 py-4 px-6">
      <h3 className="font-bold text-xl">Liste des clients</h3>
      <ClientsList data={data} isPending={isPending} error={error} isError={isError} />
    </main>
  );
}

export default AgentDashboard;
