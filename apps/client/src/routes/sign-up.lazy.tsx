import { SignUpForm } from '@/components/SignUpForm'
import { Section } from '@/components/ui/section'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/sign-up')({
  component: () => (
    <Section>
      <SignUpForm />
    </Section>
  ),
})
