import Layout from "@/layouts/AgentLayout";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_authenticated/_agent")({
  component: Layout,
});
