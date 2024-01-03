import { DashboardLayout } from '@/components/DashboardLayout'

export default function Explore() {
  return <h1>hello</h1>
}

Explore.getLayout = function getLayout(page: React.ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>
}
