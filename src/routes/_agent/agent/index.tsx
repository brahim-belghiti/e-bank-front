import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_agent/agent/")({
  component: () => <div>Hello /agent/!</div>,
});
