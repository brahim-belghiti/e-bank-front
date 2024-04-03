import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/agent/accounts/add")({
  component: () => <div>Hello add a new account!</div>,
});
