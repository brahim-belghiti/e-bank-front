import EditAccount from "@/pages/agent/EditAccount";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_authenticated/_agent/agent/accounts/$id/edit")({
  component: EditAccount,
});
