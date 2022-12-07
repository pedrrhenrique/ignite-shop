import { styled } from "..";

export const ProductContainer = styled('main', {
  maxWidth: 1180,
  margin: '0 auto',

  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  alignItems: 'stretch',
  gap: '4rem',
});

export const ImageContainer = styled('div', {
  width: '100%',
  maxWidth: 576,
  height: 656,

  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  padding: '0.25rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover',
  }

});

export const ProductDetails = styled('main', {
  display: 'flex',
  flexDirection: 'column',

  h1: {
    fontSize: '$2xl',
    color: '$gray300',
  },

  span: {
    fontSize: '$2xl',
    color: '$green300',
    marginTop: '1rem',

    display: 'block',
  },

  p: {
    fontSize: '$md',
    color: '$gray300',
    lineHeight: 1.6,
    marginTop: '2.5rem',
  },

  button: {
    backgroundColor: '$green500',
    color: '$white',
    fontSize: '$md',
    fontWeight: 'bold',
    border: 0,
    borderRadius: 8,
    marginTop: 'auto',
    padding: '1.25rem',
    cursor: 'pointer',

    '&:not(:disabled):hover': {
      backgroundColor: '$green300',
    },

    '&:disabled': {
      opacity: 0.6,
      cursor: 'not-allowed',
    }

  },

})