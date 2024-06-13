import ClientsList from "@/components/agent/client table/ClientsList";

function AgentDashboard() {
  return (
    <main className="flex h-full flex-col mt-16 gap-4 py-4 px-6">
      <h3 className="font-bold text-xl">Liste des clients</h3>
      <ClientsList />
    </main>
  );
}

export default AgentDashboard;
