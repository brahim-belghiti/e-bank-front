import AddCustomer from "@/pages/agent/AddCustomer";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_authenticated/_customer/agent/customers/add")({
  component: AddCustomer,
});
