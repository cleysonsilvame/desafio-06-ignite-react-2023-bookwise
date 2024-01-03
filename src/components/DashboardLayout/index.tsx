import Image from 'next/image'

import BookwiseIcon from '@/images/bookwise-icon.svg'
import NavBackground from '@/images/nav-background.svg'

import { NavList } from '../NavList'
import { Container, Nav } from './styles'

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <Container>
      <Nav>
        <Image src={NavBackground} alt="" priority />
        <Image src={BookwiseIcon} alt="" width={128} />

        <NavList />
      </Nav>

      {children}
    </Container>
  )
}
