import { DashboardLayout } from '@/components/DashboardLayout'

export default function Home() {
  return <h1>hello</h1>
}

Home.getLayout = function getLayout(page: React.ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>
}
