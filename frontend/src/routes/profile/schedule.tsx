import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/profile/schedule')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/profile/schedule"!</div>
}
