import { RouterProvider, createRouter, NotFoundRoute } from "@tanstack/react-router";
import { Route as rootRoute } from "./routes/__root.tsx";
import NotFound from "./pages/NotFound.tsx";
// Import the generated route tree
import { routeTree } from "./routeTree.gen.ts";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useAuthContext } from "./context/useAuthContext.ts";

// creating a route for 404 page
const notFoundRoute = new NotFoundRoute({
  getParentRoute: () => rootRoute,
  component: NotFound,
});

// reactquery client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

// Create a new router instance
const router = createRouter({
  routeTree,
  context: {
    auth: undefined!,
  },
  notFoundRoute,
});

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const App = () => {
  const auth = useAuthContext();
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} context={{ auth: auth }} />
    </QueryClientProvider>
  );
};

export default App;
