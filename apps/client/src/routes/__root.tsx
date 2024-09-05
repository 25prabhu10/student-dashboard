import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown'
import { Input } from '@/components/ui/input'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { CircleUser, Menu, School, Search } from 'lucide-react'
import React, { Suspense } from 'react'

export const Route = createRootRoute({
  component: Root,
})

function NavBar() {
  return (
    <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
      <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <Link
          to="/"
          className="flex items-center gap-2 text-lg md:text-base text-muted-foreground [&.active]:text-foreground">
          <School className="h-6 w-6" />
          <span className="sr-only">School</span>
        </Link>
        <Link
          to="/about"
          className="text-muted-foreground transition-colors hover:text-foreground [&.active]:text-foreground">
          About
        </Link>
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <nav className="grid gap-6 text-lg font-medium">
            <Link
              to="/"
              className="flex items-center gap-2 text-lg text-muted-foreground [&.active]:text-foreground">
              <School className="h-6 w-6" />
              <span className="sr-only">School</span>
            </Link>
            <Link
              to="/about"
              className="hover:text-foreground text-muted-foreground [&.active]:text-foreground">
              About
            </Link>
            <Link
              to="/login"
              className="hover:text-foreground text-muted-foreground [&.active]:text-foreground">
              Login
            </Link>
            <Link
              to="/sign-up"
              className="hover:text-foreground text-muted-foreground [&.active]:text-foreground">
              Sign Up
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
      <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <form className="ml-auto flex-1 sm:flex-initial">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search products..."
              className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
            />
          </div>
        </form>
        <Link
          to="/login"
          className="text-muted-foreground transition-colors hover:text-foreground [&.active]:text-foreground">
          Login
        </Link>
        <Link
          to="/sign-up"
          className="text-muted-foreground transition-colors hover:text-foreground [&.active]:text-foreground">
          Sign Up
        </Link>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="secondary" size="icon" className="rounded-full">
              <CircleUser className="h-5 w-5" />
              <span className="sr-only">Toggle user menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Support</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}

const TanStackRouterDevtools =
  process.env.NODE_ENV === 'production'
    ? () => null // Render nothing in production
    : React.lazy(() =>
        // Lazy load in development
        import('@tanstack/router-devtools').then((res) => ({
          default: res.TanStackRouterDevtools,
          // For Embedded Mode
          // default: res.TanStackRouterDevtoolsPanel
        }))
      )

function Root() {
  return (
    <>
      <NavBar />
      <hr />
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <Outlet />
      </main>
      <Suspense>
        <TanStackRouterDevtools />
      </Suspense>
    </>
  )
}
