import { Section } from '@/components/ui/section'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/add-student')({
  component: () => <Section>Hello /add-student!</Section>,
})
