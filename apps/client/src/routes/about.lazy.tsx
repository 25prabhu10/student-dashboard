import { Section } from '@/components/ui/section'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/about')({
  component: () => (
    <Section>
      <About />
    </Section>
  ),
})

function About() {
  return <div className="p-2">Hello from About!</div>
}
