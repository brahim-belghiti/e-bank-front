import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_customer/dashboard")({
  component: () => (
    <div className="h-screen flex justify-center items-center">
      Hello /(customer)/_dash/dashboard!
    </div>
  ),
});
