import client from '@/lib/api'
import { Student } from '@student-ui/common'

export async function getStudentList(): Promise<Student[]> {
  const res = await client.students.$get()

  if (!res.ok) {
    throw new Error('server error')
  }

  return (await res.json()) as Student[]
}
