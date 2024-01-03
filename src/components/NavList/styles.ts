import { styled } from '@/styles'

export const Ul = styled('ul', {
  listStyleType: 'none',
})

export const NavItem = styled('li', {
  position: 'relative',
  width: '100%',
  height: '3.5rem',

  color: '$gray400',

  a: {
    height: '100%',
    width: '100%',

    display: 'flex',
    alignItems: 'center',

    gap: '$2',

    svg: {
      fontSize: '1.5rem',
    },

    fontFamily: '$default',
  },

  variants: {
    active: {
      true: {
        color: 'inherit',
        fontWeight: '$bold',

        '&::before': {
          content: '',
          position: 'absolute',

          width: '0.25rem',
          height: '1.5rem',
          left: '-1rem',
          top: '1rem',

          borderRadius: '$md',
          background: '$gradient-vertical',
        },
      },
    },
  },
})
