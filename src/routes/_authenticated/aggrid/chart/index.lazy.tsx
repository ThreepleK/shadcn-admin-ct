import { createLazyFileRoute } from '@tanstack/react-router'
import AgChart from '@/features/aggrid/chart'

export const Route = createLazyFileRoute('/_authenticated/aggrid/chart/')({
  component: AgChart,
})
