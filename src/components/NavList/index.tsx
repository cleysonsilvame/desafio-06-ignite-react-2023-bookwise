'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Suspense } from 'react'
import { PiBinoculars, PiChartLineUpLight } from 'react-icons/pi'

import { NavItem, Ul } from './styles'

export function NavList() {
  const pathname = usePathname()

  return (
    <Suspense>
      <Ul>
        <NavItem active={pathname === '/home'}>
          <Link href="/home">
            <PiChartLineUpLight />
            <span>Início</span>
          </Link>
        </NavItem>
        <NavItem active={pathname === '/explore'}>
          <Link href="/explore">
            <PiBinoculars />
            <span>Explorar</span>
          </Link>
        </NavItem>
      </Ul>
    </Suspense>
  )
}
