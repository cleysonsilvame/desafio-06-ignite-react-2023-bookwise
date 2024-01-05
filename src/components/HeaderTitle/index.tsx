import { Subtitle } from './styles'

export interface HeaderTitleProps {
  title: string
  subtitle: string
}

export function HeaderTitle({ title, subtitle }: HeaderTitleProps) {
  return (
    <div>
      <p>{title}</p>
      <Subtitle>{subtitle}</Subtitle>
    </div>
  )
}
