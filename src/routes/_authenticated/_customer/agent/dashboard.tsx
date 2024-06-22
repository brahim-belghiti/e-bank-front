import AgentDashboard from "@/pages/agent/AgentDashboard";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_authenticated/_customer/agent/dashboard")({
  component: AgentDashboard,
});
