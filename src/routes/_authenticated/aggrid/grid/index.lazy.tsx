import { createLazyFileRoute } from '@tanstack/react-router'
import AgGrid from '@/features/aggrid/grid'

export const Route = createLazyFileRoute('/_authenticated/aggrid/grid/')({
  component: AgGrid,
})