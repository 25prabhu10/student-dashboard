import { Hono } from 'hono'
import { serveStatic } from 'hono/bun'
import { logger } from 'hono/logger'
import marksSheetsRoute from './routes/marksSheets'
import semestersRoute from './routes/semesters'
import studentsRoute from './routes/students'
import subjectsRoute from './routes/subjects'
import testsRoute from './routes/tests'

const app = new Hono()

app.use(logger())

export const apiRoutes = app
  .basePath('/api')
  .route('/marksSheets', marksSheetsRoute)
  .route('/semesters', semestersRoute)
  .route('/students', studentsRoute)
  .route('/subjects', subjectsRoute)
  .route('/tests', testsRoute)

app.use(serveStatic({ root: '../client/dist' }))
app.get(serveStatic({ path: '../client/dist/index.html' }))

export default app