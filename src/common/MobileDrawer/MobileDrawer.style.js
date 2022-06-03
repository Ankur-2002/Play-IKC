import { makeStyles } from '@mui/styles';

export const useStyle = makeStyles(theme => ({
  container: {
    zIndex: 99,
    boxSizing: 'border-box',
  },
  Drawer: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    gap: '15px',
    // justifyContent: 'space-between',
    minWidth: '50vw',
    zIndex: 100,
  },
  header: {
    display: 'flex',
    gap: '10px',
    alignItems: 'center',
    justifyContent: 'space-between',
    background: 'rgb(245 245 245)',
    boxShadow: '0 0 5px 0',
    padding: '1rem',
  },
  details: {
    '& span': {
      display: 'block',
      fontSize: '15px',
    },
  },
  bottom: {
    padding: '0.5rem',
    height: '90%',
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    '& button': {
      fontSize: '14px',
      display: 'flex',
      justifyContent: 'start',
      textTransform: 'capitalize',
    },
    '& div': {
      display: 'flex',
      gap: '10px',
      alignItems: 'center',
      '& svg': {
        fontSize: '25px',
      },
    },
  },
  Button: {
    color: 'white',
    fontWeight: '700',
    background: 'linear-gradient(92.86deg, #E1A200 0%, #FF5C00 100%)',
    padding: '1rem',
    fontSize: '13px',
  },
}));
