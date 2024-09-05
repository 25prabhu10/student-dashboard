import { LoginForm } from '@/components/LoginForm'
import { Section } from '@/components/ui/section'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/login')({
  component: () => (
    <Section>
      <LoginForm />
    </Section>
  ),
})
