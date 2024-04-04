import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_agent/agent/customers/add")({
  component: () => <div>Hello add a new customer!</div>,
});
