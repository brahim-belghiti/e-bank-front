import { AddTranscation } from "@/pages/customer/AddTranscation";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_authenticated/_customer/transactions/add")({
  component: AddTranscation,
});
