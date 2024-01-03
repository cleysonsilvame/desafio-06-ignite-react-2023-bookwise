import { styled } from '@/styles'

export const Container = styled('main', {
  height: '100vh',
  display: 'flex',
  padding: '$5',

  gap: '$5',
})

export const ImageSection = styled('div', {
  position: 'relative',
  width: '37rem',
  height: '100%',

  display: 'flex',
  alignItems: 'center',

  borderRadius: '$md',
  overflow: 'hidden',

  '&::after': {
    content: '',
    position: 'absolute',
    left: 0,
    top: 0,

    width: '100%',
    height: '100%',

    background:
      'linear-gradient(0deg, rgba(42, 40, 121, 0.60) 0%, rgba(42, 40, 121, 0.60) 100%), rgba(0, 0, 0, 0.60)',
  },

  'img:first-child': {
    position: 'absolute',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },

  'img:last-child': {
    width: '100%',
    zIndex: 1,
  },
})

export const LoginSection = styled('div', {
  flex: 1,

  display: 'flex',
  flexDirection: 'column',

  justifyContent: 'center',
  alignItems: 'center',

  gap: '$10',

  '& > div:first-child': {
    width: '23.25rem',

    '& > h1': {
      fontSize: '$xl',
      fontWeight: '$bold',
      lineHeight: '$short',
    },
    '& > p': {
      color: '$gray200',
    },
  },
})

export const ButtonsSection = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  justifyContent: 'center',
  alignItems: 'center',

  gap: '$4',

  width: '23.25rem',
})
