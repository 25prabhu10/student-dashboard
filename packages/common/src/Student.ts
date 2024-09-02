import { z } from 'zod'

export const studentSchema = z.object({
  id: z.number().int().positive(),
  name: z.string().min(1).max(50),
})

export const createStudentPostSchema = studentSchema.omit({ id: true })

export type Student = z.infer<typeof studentSchema>
