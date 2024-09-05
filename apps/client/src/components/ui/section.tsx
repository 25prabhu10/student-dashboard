import { cn } from '@/lib/utils'
import * as React from 'react'

const Section = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <section ref={ref} className={cn('flex-1 p-8', className)} {...props} />
))
Section.displayName = 'Section'

export { Section }
