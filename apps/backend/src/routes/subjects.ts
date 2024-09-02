import { zValidator } from '@hono/zod-validator'
import { type Subject, createSubjectPostSchema } from 'common'
import { Hono } from 'hono'

const fakeSubjects: Subject[] = [
  {
    id: 1,
    name: 'ITBA',
    code: 'BCA1020',
    credits: 3,
  },
]

const subjectsRoute = new Hono()
  // retrieve all subjects
  .get('/', (c) => c.json({ subjects: fakeSubjects }))

  // add a new subject
  .post('/', zValidator('json', createSubjectPostSchema), async (c) => {
    const newSubject = c.req.valid('json')

    fakeSubjects.push({ id: fakeSubjects.length + 1, ...newSubject })

    c.status(201)
    return c.json(fakeSubjects)
  })

  // retrieve specific subject by `ID`
  .get('/:id{[0-9]+}', (c) => {
    const id = Number.parseInt(c.req.param('id'))

    const subject = fakeSubjects.find((x) => x.id === id)

    if (!subject) return c.notFound()

    return c.json(subject)
  })

  // update subject details
  .put('/', (c) => c.json({ msg: 'Updated' }))

  // delete subject by `ID`
  .delete('/:id{[0-9]+}', (c) => {
    const id = Number.parseInt(c.req.param('id'))

    const index = fakeSubjects.findIndex((x) => x.id === id)

    if (index === -1) return c.notFound()

    const deletedSubject = fakeSubjects.splice(index, 1)[0]

    return c.json(deletedSubject)
  })

export default subjectsRoute
