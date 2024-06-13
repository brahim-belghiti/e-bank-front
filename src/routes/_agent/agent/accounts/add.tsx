import AddAccount from "@/pages/agent/AddAccount";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_agent/agent/accounts/add")({
  component: AddAccount,
});
