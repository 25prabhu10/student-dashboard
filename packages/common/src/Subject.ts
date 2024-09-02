import { z } from 'zod'

export const subjectSchema = z.object({
  id: z.number().int().positive(),
  name: z.string().min(1).max(50),
  code: z.string().max(10),
  credits: z.number().nonnegative().max(10),
})

export const createSubjectPostSchema = subjectSchema.omit({ id: true })

export type Subject = z.infer<typeof subjectSchema>
