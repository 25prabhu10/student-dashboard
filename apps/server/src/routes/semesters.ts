import { zValidator } from '@hono/zod-validator'
import { type Semester, createSemesterPostSchema } from '@student-ui/common'
import { Hono } from 'hono'

const fakeSemesters: Semester[] = [
  {
    id: 1,
    sem: 1,
    gpa: 0,
    student_id: 1,
  },
]

const semestersRoute = new Hono()
  // retrieve all semesters
  .get('/', (c) => c.json({ semesters: fakeSemesters }))

  // add a new semester
  .post('/', zValidator('json', createSemesterPostSchema), async (c) => {
    const newSemester = c.req.valid('json')

    fakeSemesters.push({ id: fakeSemesters.length + 1, ...newSemester })

    c.status(201)
    return c.json(fakeSemesters)
  })

  // retrieve specific semester by `ID`
  .get('/:id{[0-9]+}', (c) => {
    const id = Number.parseInt(c.req.param('id'))

    const semester = fakeSemesters.find((x) => x.id === id)

    if (!semester) return c.notFound()

    return c.json(semester)
  })

  // update semester details
  .put('/', (c) => c.json({ msg: 'Updated' }))

  // delete semester by `ID`
  .delete('/:id{[0-9]+}', (c) => {
    const id = Number.parseInt(c.req.param('id'))

    const index = fakeSemesters.findIndex((x) => x.id === id)

    if (index === -1) return c.notFound()

    const deletedSemester = fakeSemesters.splice(index, 1)[0]

    return c.json(deletedSemester)
  })

export default semestersRoute
