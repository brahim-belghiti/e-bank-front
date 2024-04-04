import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_agent/agent/")({
  component: () => <div className="h-screen flex justify-center items-center">agent index</div>,
});
