import { styled } from "../../styles";
import * as Dialog from '@radix-ui/react-dialog'

export const CartContent = styled(Dialog.Content, {
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  width: '30rem',
  background: '$gray800',
  padding: '3rem',
  paddingTop: '4.5rem',
  boxShadow: '-4px 0 30px rgba(0, 0, 0, 0.8)',

  display: 'flex',
  flexDirection: 'column',

  h2: {
    fontSize: '$xl',
    fontWeight: 700,
    color: '$gray100',
    marginBottom: '2rem',
  },

  '> section': {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    gap: '1.5rem',
    overflowY: 'auto',

    '.cartEmpty': {
      fontSize: '$lg',
    }
  }

})

export const CartClose = styled(Dialog.Close, {
  position: 'absolute',
  top: '1.75rem',
  right: '1.75rem',
  background: 'none',
  color: '$gray500',
  border: 'none'
})

export const CartProduct = styled('div', {
  width: '100%',
  height: '5.8125rem',

  display: 'flex',
  alignItems: 'center',
  gap: '1.25rem',
})

export const CartProductImage = styled('div', {
  width: '6.3125rem',
  height: '5.8125rem',
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover',
  }

})

export const CartProductDetails = styled('div', {
  height: '100%',


  display: 'flex',
  flexDirection: 'column',

  p: {
    fontSize: '$lg',
    color: '$gray300',
  },

  strong: {
    fontSize: '$lg',
    fontWeight: 700,
    marginTop: 4,
  },

  button: {
    width: 'max-content',
    fontSize: '$md',
    fontWeight: 700,
    background: 'none',
    color: '$green500',
    border: 'none',
    marginTop: 'auto',
  },
})

export const CartFinalization = styled('div', {
  marginTop: 'auto',

  display: 'flex',
  flexDirection: 'column',

  button: {
    width: '100%',
    height: '4.3125rem',
    fontSize: '$lg',
    fontWeight: 700,
    background: '$green500',
    color: '$white',
    border: 'none',
    borderRadius: 8,

    '&:disabled': {
      opacity: 0.6,
      cursor: 'not-allowed',
    },

    '&:not(:disabled):hover': {
      background: '$green300',
    },
  },
})

export const FinalizationDetails = styled('section', {
  marginBottom: 55,

  display: 'flex',
  flexDirection: 'column',
  gap: 8,

  div: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

    p: {
      fontSize: '$md',
      color: '$gray300',
    },

    '&:last-child': {
      fontWeight: 700,

      span: {
        fontSize: '$md',
      },

      p: {
        fontSize: '$xl',
        color: '$gray100',
      }
    },
  }
})