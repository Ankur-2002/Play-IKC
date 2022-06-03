import { makeStyles } from '@mui/styles';

export const useStyle = makeStyles(theme => ({
  wrapper: {},
  top: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px',
    background: '#000000',
    position: 'relative',
    '& img': {
      maxWidth: '200px',
      objectFit: 'contain',
      zIndex: 5,
      '@media (max-width: 500px)': {
        display: 'none',
      },
    },
    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '100%',
      height: '75px',
      '@media (max-width: 500px)': {
        height: '20px',
      },
      background: 'linear-gradient(92.86deg, #E1A200 0%, #FF5C00 100%)',
    },
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '15px',
    letterSpacing: '1px',
    color: 'white',
    fontWeight: 600,
    '& div': {
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',

      '& span': {
        cursor: 'pointer',
      },
    },
  },
  bottom: {
    padding: '20px',
    background: '#000000',
  },

  end: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '20px',
    color: 'white',

    '& span': {
      alignSelf: 'flex-end',
    },
  },
}));
