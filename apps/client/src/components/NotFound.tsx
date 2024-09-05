import { Link } from '@tanstack/react-router'
import { Section } from './ui/section'

function NotFound() {
  return (
    <Section className="flex flex-col gap-10 items-center">
      <img src="/page-not-found.svg" alt="Page not found" />
      <Link
        to="/"
        className="font-bold border-4 rounded-xl px-5 py-3 hover:border-neutral-800">
        Go to Back
      </Link>
    </Section>
  )
}

export default NotFound
