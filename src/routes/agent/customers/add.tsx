import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/agent/customers/add")({
  component: () => <div>Hello add a new customer!</div>,
});
