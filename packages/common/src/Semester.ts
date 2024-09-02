import { z } from 'zod'

export const semesterSchema = z.object({
  id: z.number().int().positive(),
  sem: z.number().int().positive(),
  gpa: z.number().nonnegative().max(4),
  student_id: z.number().int().positive(),
})

export const createSemesterPostSchema = semesterSchema.omit({ id: true })

export type Semester = z.infer<typeof semesterSchema>
