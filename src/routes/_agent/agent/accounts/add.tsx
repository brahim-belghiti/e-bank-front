import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_agent/agent/accounts/add")({
  component: () => <div>Hello add a new account!</div>,
});
