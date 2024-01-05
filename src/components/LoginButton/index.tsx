import { LinkProps } from 'next/link'

import { Button } from './styles'

export type SignInButtonProps = LinkProps & {
  icon?: React.ReactNode
  children?: React.ReactNode
}

export function SignInButton({ icon, children, ...props }: SignInButtonProps) {
  return (
    <Button {...props}>
      {icon && icon}
      <span>{children}</span>
    </Button>
  )
}
