import AddCustomer from "@/pages/agent/AddCustomer";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_agent/agent/customers/add")({
  component: AddCustomer,
});
