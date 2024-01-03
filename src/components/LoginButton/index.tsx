import { LinkProps } from 'next/link'

import { Button } from './styles'

export type LoginButtonProps = LinkProps & {
  icon?: React.ReactNode
  children?: React.ReactNode
}

export function LoginButton({ icon, children, ...props }: LoginButtonProps) {
  return (
    <Button {...props}>
      {icon && icon}
      <span>{children}</span>
    </Button>
  )
}
