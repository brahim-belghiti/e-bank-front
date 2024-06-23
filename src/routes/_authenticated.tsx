import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/_authenticated")({
  beforeLoad: async ({ context }) => {
    const authenticated = context.auth.checkAuthentication();
    if (!authenticated) {
      throw redirect({
        to: "/",
      });
    }
  },
});
