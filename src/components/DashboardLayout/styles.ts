import { styled } from '@/styles'

export const Container = styled('div', {
  height: '100vh',
  display: 'flex',
  padding: '$5',

  gap: '$5',
})

export const Nav = styled('nav', {
  position: 'relative',
  width: '14.5rem',
  height: '100%',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  overflow: 'hidden',
  borderRadius: '$md',

  '& > img:first-child': {
    zIndex: -1,
    objectFit: 'contain',
    position: 'absolute',
  },

  '& > img:nth-child(2)': {
    width: '8rem',
    margin: '2.5rem 0 4rem 0',
  },
})
