import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import {
  NotFoundRoute,
  RouterProvider,
  createRouter,
} from '@tanstack/react-router'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

// Import the generated route tree
import { routeTree } from './routeTree.gen'

import { Route as rootRoute } from './routes/__root'
import NotFound from './components/NotFound'

const notFoundRoute = new NotFoundRoute({
  getParentRoute: () => rootRoute,
  component: NotFound,
})

// Create a new router instance
const router = createRouter({ routeTree, notFoundRoute })

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

// Create a client
const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>
)
