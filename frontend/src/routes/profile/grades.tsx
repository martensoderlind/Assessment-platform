import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/profile/grades')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/profile/grades"!</div>
}
