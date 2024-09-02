import { z } from 'zod'

export const testSchema = z.object({
  id: z.number().int().positive(),
  subject_id: z.number().int().positive(),
  name: z.string().min(1).max(50),
  max_marks: z.number().nonnegative(),
  weight: z.number().nonnegative().max(100),
})

export const createTestPostSchema = testSchema.omit({ id: true })

export type Test = z.infer<typeof testSchema>
