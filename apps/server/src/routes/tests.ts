import { zValidator } from '@hono/zod-validator'
import { type Test, createTestPostSchema } from '@student-ui/common'
import { Hono } from 'hono'

const fakeTests: Test[] = [
  { id: 1, name: 'Assignment 1', max_marks: 10, subject_id: 1, weight: 10 },
]

const testsRoute = new Hono()
  // retrieve all tests
  .get('/', (c) => c.json(fakeTests))

  // add a new test
  .post('/', zValidator('json', createTestPostSchema), async (c) => {
    const newTest = c.req.valid('json')

    fakeTests.push({ id: fakeTests.length + 1, ...newTest })

    c.status(201)
    return c.json(fakeTests)
  })

  // retrieve specific test by `ID`
  .get('/:id{[0-9]+}', (c) => {
    const id = Number.parseInt(c.req.param('id'))

    const test = fakeTests.find((x) => x.id === id)

    if (!test) return c.notFound()

    return c.json(test)
  })

  // update test details
  .put('/', (c) => c.json({ msg: 'Updated' }))

  // delete test by `ID`
  .delete('/:id{[0-9]+}', (c) => {
    const id = Number.parseInt(c.req.param('id'))

    const index = fakeTests.findIndex((x) => x.id === id)

    if (index === -1) return c.notFound()

    const deletedTest = fakeTests.splice(index, 1)[0]

    return c.json(deletedTest)
  })

export default testsRoute
