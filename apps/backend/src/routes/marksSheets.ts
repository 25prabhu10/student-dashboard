import { zValidator } from '@hono/zod-validator'
import { type MarksSheet, createMarksSheetPostSchema } from 'common'
import { Hono } from 'hono'

const fakeMarksSheets: MarksSheet[] = [
  {
    id: 1,
    marks: 15,
    percentage: 25.36,
    sem_id: 1,
    student_id: 1,
    subject_id: 1,
    test_id: 1,
  },
]

const marksSheetsRoute = new Hono()
  // retrieve all marksSheets
  .get('/', (c) => c.json(fakeMarksSheets))

  // add a new marksSheet
  .post('/', zValidator('json', createMarksSheetPostSchema), async (c) => {
    const newMarksSheet = c.req.valid('json')

    fakeMarksSheets.push({ id: fakeMarksSheets.length + 1, ...newMarksSheet })

    c.status(201)
    return c.json(fakeMarksSheets)
  })

  // retrieve specific marksSheet by `ID`
  .get('/:id{[0-9]+}', (c) => {
    const id = Number.parseInt(c.req.param('id'))

    const marksSheet = fakeMarksSheets.find((x) => x.id === id)

    if (!marksSheet) return c.notFound()

    return c.json(marksSheet)
  })

  // update marksSheet details
  .put('/', (c) => c.json({ msg: 'Updated' }))

  // delete marksSheet by `ID`
  .delete('/:id{[0-9]+}', (c) => {
    const id = Number.parseInt(c.req.param('id'))

    const index = fakeMarksSheets.findIndex((x) => x.id === id)

    if (index === -1) return c.notFound()

    const deletedMarksSheet = fakeMarksSheets.splice(index, 1)[0]

    return c.json(deletedMarksSheet)
  })

export default marksSheetsRoute
