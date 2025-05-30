import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/profile/messages')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/profile/messages"!</div>
}
