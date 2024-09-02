import { z } from 'zod'

export const marksSheetSchema = z.object({
  id: z.number().int().positive(),
  sem_id: z.number().int().positive(),
  student_id: z.number().int().positive(),
  subject_id: z.number().int().positive(),
  test_id: z.number().nonnegative(),
  marks: z.number().nonnegative(),
  percentage: z.number().nonnegative().max(100),
})

export const createMarksSheetPostSchema = marksSheetSchema.omit({ id: true })

export type MarksSheet = z.infer<typeof marksSheetSchema>
