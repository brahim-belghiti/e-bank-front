import Layout from "@/layouts/CustomerLayout";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_customer")({
  component: Layout,
});
