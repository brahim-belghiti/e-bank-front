import EditCustomer from "@/pages/agent/EditCustomer";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_agent/agent/customers/$id/edit")({
  component: EditCustomer,
});
