import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_agent')({
  component: () => <div>Hello /_agent!</div>
})