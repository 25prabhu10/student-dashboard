import { type APIRoutes } from '@student-ui/server'
import { hc } from 'hono/client'

const client = hc<APIRoutes>('/')

export default client.api
