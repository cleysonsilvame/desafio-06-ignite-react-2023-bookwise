import Link from 'next/link'

import { styled } from '@/styles'

export const Button = styled(Link, {
  cursor: 'pointer',
  position: 'relative',

  width: '100%',
  padding: '$5 $6',

  display: 'flex',
  alignItems: 'center',
  gap: '$5',

  background: '$gray500',
  fontSize: '$lg',
  color: '$gray200',
  fontWeight: '$bold',
  borderRadius: '0.5rem',
  outline: 'solid 0px $gray500',

  transition: 'all 0.25s ease',

  '&:hover': {
    background: 'transparent',
    outlineWidth: '1px',
  },

  '& > svg': {
    fontSize: '2rem',
  },
})
