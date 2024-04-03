import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(customer)/transactions/add")({
  component: () => <div>Hello /(customer)/newtransaction!</div>,
});
