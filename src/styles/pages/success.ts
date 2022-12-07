import { styled } from "..";

export const SuccessContainer = styled('main', {
  height: 656,
  margin: '0 auto',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',

  h1: {
    fontSize: '$2xl',
    color: '$gray100',
    marginBottom: '4rem',
  },

  p: {
    maxWidth: 560,
    textAlign: 'center',
    color: '$gray300',
    fontSize: '$xl',
    lineHeight: 1.4,
    marginTop: '2rem',
  },

  a: {
    color: '$green500',
    fontSize: '$lg',
    fontWeight: 'bold',
    textDecoration: 'none',
    marginTop: '5rem',

    display: 'block',

    '&:hover': {
      color: '$green300', 
    }

  }

})

export const ImagesContainer = styled('section', {
  marginBottom: '3rem',

  display: 'flex',
  alignItems: 'center',

  'div + div': {
    marginLeft: 'calc(-140px / 2)',
  }
})

export const ImageContainer = styled('div', {
  position: 'relative',
  width: 140,
  height: 140,
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: '50%',
  boxShadow: '0px 0px 60px rgba(0, 0, 0, 0.8)',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover',
  }

})