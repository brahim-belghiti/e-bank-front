import ChangePassword from "@/pages/changePassword";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/password")({
  component: ChangePassword,
});
