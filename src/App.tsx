import './index.css';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import {
  RouterProvider,
  createRouter,
  NotFoundRoute,
} from '@tanstack/react-router';
import { Route as rootRoute } from './routes/__root.tsx';
import NotFound from './pages/NotFound.tsx';
// Import the generated route tree
import { routeTree } from './routeTree.gen';

// creating a route for 404 page
const notFoundRoute = new NotFoundRoute({
  getParentRoute: () => rootRoute,
  component: NotFound
});

// Create a new router instance
const router = createRouter({ routeTree, notFoundRoute });

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

// Render the app
const rootElement = document.getElementById('root')!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );
}
