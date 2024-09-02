import app, { apiRoutes } from './app'

const server = Bun.serve({
  fetch: app.fetch,
})

console.log(`Listening on ${server.hostname}:${server.port}`)

export type APIRoutes = typeof apiRoutes
