import { Suspense, lazy } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Lazy load the components
const AccountsList = lazy(() => import("@/components/agent/acconts-table/AccountsList"));
const ClientsList = lazy(() => import("@/components/agent/client-table/ClientsList"));

function AgentDashboard() {
  return (
    <main className="flex h-full flex-col mt-16 gap-4 py-4 px-6">
      <Tabs defaultValue="clientsList" className="w-full">
        <TabsList>
          <TabsTrigger value="clientsList">Liste des clients</TabsTrigger>
          <TabsTrigger value="accountsList">List des comptes bancaires</TabsTrigger>
        </TabsList>
        <Suspense fallback={<div>Loading...</div>}>
          <TabsContent value="clientsList">
            <ClientsList />
          </TabsContent>
          <TabsContent value="accountsList">
            <AccountsList />
          </TabsContent>
        </Suspense>
      </Tabs>
    </main>
  );
}

export default AgentDashboard;
