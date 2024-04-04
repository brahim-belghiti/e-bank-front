import Layout from "@/layouts/AgentLayout";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_agent")({
  component: Layout,
});
