import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(customer)/dashboard")({
  component: () => <div>Hello /dashboard/!</div>,
});
