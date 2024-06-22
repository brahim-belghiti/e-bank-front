import Layout from "@/layouts/CustomerLayout";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_authenticated/_customer")({
  component: Layout,
});
