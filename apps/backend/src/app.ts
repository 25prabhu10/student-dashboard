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

app.route('/api/marksSheets', marksSheetsRoute)
app.route('/api/semesters', semestersRoute)
app.route('/api/students', studentsRoute)
app.route('/api/subjects', subjectsRoute)
app.route('/api/tests', testsRoute)

app.use(serveStatic({ root: '../frontend/dist' }))
app.get(serveStatic({ path: '../frontend/dist/index.html' }))

export default app
