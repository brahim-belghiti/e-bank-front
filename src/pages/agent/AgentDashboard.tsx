import ClientsList from "@/components/agent/client table/ClientsList";
import { PagePagination } from "@/components/PagePagination";
import { useQuery } from "@tanstack/react-query";
import CustomerServices from "@/api/customer";
import { useMemo, useState } from "react";

function AgentDashboard() {
  const { data, isPending, error, isError } = useQuery({
    queryKey: ["customers"],
    queryFn: CustomerServices.getCustomers,
  });
  // pagination
  const customers = data || [];
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Memoize total pages and current data
  const totalPages = useMemo(
    () => Math.ceil(customers.length / itemsPerPage),
    [customers.length, itemsPerPage],
  );
  const currentData = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return customers.slice(startIndex, endIndex);
  }, [currentPage, itemsPerPage, customers]);

  return (
    <main className="flex h-full flex-col mt-16 gap-4 py-4 px-6">
      <h3 className="font-bold text-xl">Liste des clients</h3>
      <ClientsList data={currentData} isPending={isPending} error={error} isError={isError} />
      <div className="h-14">
        <PagePagination
          currentPage={currentPage}
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </main>
  );
}

export default AgentDashboard;
