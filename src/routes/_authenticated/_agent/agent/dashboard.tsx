import AgentDashboard from "@/pages/agent/AgentDashboard";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_authenticated/_agent/agent/dashboard")({
  component: AgentDashboard,
});
