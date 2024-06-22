import AddAccount from "@/pages/agent/AddAccount";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_authenticated/_customer/agent/accounts/add")({
  component: AddAccount,
});
