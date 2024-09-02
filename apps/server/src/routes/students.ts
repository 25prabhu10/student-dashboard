import { zValidator } from '@hono/zod-validator'
import { type Student, createStudentPostSchema } from '@student-ui/common'
import { Hono } from 'hono'

const fakeStudents: Student[] = [{ id: 1, name: 'John Doe' }]

const studentsRoute = new Hono()
  // retrieve all students
  .get('/', (c) => c.json(fakeStudents))

  // add a new student
  .post('/', zValidator('json', createStudentPostSchema), async (c) => {
    const newStudent = c.req.valid('json')

    fakeStudents.push({ id: fakeStudents.length + 1, ...newStudent })

    c.status(201)
    return c.json(fakeStudents)
  })

  // retrieve specific student by `ID`
  .get('/:id{[0-9]+}', (c) => {
    const id = Number.parseInt(c.req.param('id'))

    const student = fakeStudents.find((x) => x.id === id)

    if (!student) return c.notFound()

    return c.json(student)
  })

  // update student details
  .put('/', (c) => c.json({ msg: 'Updated' }))

  // delete student by `ID`
  .delete('/:id{[0-9]+}', (c) => {
    const id = Number.parseInt(c.req.param('id'))

    const index = fakeStudents.findIndex((x) => x.id === id)

    if (index === -1) return c.notFound()

    const deletedStudent = fakeStudents.splice(index, 1)[0]

    return c.json(deletedStudent)
  })

export default studentsRoute
