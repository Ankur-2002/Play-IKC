import { makeStyles } from '@mui/styles';

export const useStyle = makeStyles(theme => ({
  container: {
    position: 'relative',
    top: 0,
    zIndex: 1000,
    padding: '2rem 3rem 0 3rem',
    background: 'transparent',
  },
  wrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  links: {
    display: 'flex',
    gap: '25px',
    position: 'relative',

    '@media (max-width: 500px)': {
      display: 'none',
    },
  },

  classesLink: {
    textDecoration: 'none',
    position: 'relative',
    fontSize: '15px',
    color: props => (props.active ? '#E1A200' : '#969696'),
    fontWeight: 500,
    textAlign: 'center',
    '&:hover': {
      color: '#969696',
    },
    '&::before': {
      content: ' "" ',
      position: 'absolute',
      bottom: '-2px',
      margin: 'auto',
      left: 0,
      right: 0,
      width: '100%',
      height: '1px',
      background: 'linear-gradient(92.86deg, #E1A200 0%, #FF5C00 100%)',
      display: props => (props.active ? 'block' : 'none'),
    },
  },
  profile: {
    '& img': {
      objectFit: 'contain',
      cursor: 'pointer',
    },
  },
}));
