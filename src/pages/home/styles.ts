import Link from 'next/link'

import { styled } from '@/styles'

export const Container = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1.8fr 1fr',
  padding: '$5',

  columnGap: '4rem',
})

export const Header = styled('div', {
  gridColumn: '1 / -1',

  display: 'flex',
  alignItems: 'center',
  gap: '$3',
  marginBottom: '$6',

  '> svg': {
    fontSize: '$2xl',
    color: '$green100',
  },
  '> h1': {
    fontSize: '$2xl',
    fontWeight: '$bold',
    lineHeight: '$short',
  },
})

export const Subtitle = styled('p', {
  fontSize: '$sm',
  marginBottom: '$4',
})

export const SeeAllLink = styled(Link, {
  fontSize: '$sm',
  fontWeight: '$bold',
  color: '$purple100',

  display: 'flex',
  alignItems: 'center',
  gap: '$2',

  lineHeight: '$base',
})

export const PopularBooksHeader = styled('div', {
  display: 'flex',
  alignItems: 'start',
  justifyContent: 'space-between',
})

export const MostRecentViews = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
})

export const Card = styled('div', {
  backgroundColor: '$gray700',
  borderRadius: '$md',

  variants: {
    size: {
      sm: {
        padding: '$5',
      },
      md: {
        padding: '$6',
      },
    },
  },

  defaultVariants: {
    size: 'md',
  },
})

export const UserSection = styled('div', {
  display: 'flex',
  gap: '$3',

  '> img': {
    width: '2.5rem',
    height: '2.5rem',
    borderRadius: '$full',
    objectFit: 'cover',

    border: 'solid 1px transparent',
    backgroundImage: 'linear-gradient(white, white), $gradient-vertical',
    backgroundOrigin: 'border-box',
    backgroundClip: 'content-box, border-box',
  },

  '.date': {
    fontSize: '$sm',
    color: '$gray400',
  },
})

export const Stars = styled('div', {
  marginLeft: 'auto',

  '> svg': {
    color: '$purple100',
  },
})

export const BookSection = styled('div', {
  marginTop: '$8',

  display: 'flex',
  gap: '$5',

  '.summary': {
    marginTop: '$5',
    fontSize: '$sm',
    color: '$gray300',

    '> strong': {
      color: '$purple100',
    },
  },
})
