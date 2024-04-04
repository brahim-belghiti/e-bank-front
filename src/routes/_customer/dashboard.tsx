import Dashboard from "@/pages/customer/Dashboard";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_customer/dashboard")({
  component: Dashboard
});
