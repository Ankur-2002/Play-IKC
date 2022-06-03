import { makeStyles } from '@mui/styles';

export const useStyle = makeStyles(theme => ({
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    borderBottom: '1px solid #5b5b5b',
    '& span': {
      padding: '0.5rem 1rem 0 1rem',
      fontSize: '14px',
      color: '#5B5B5B',
      fontWeight: 500,
      cursor: 'pointer',
      paddingBottom: '0.5rem',
      boxSizing: 'border-box',
    },
    '& .color': {
      borderBottom: '3px solid #e1a200',
      color: '#e1a200',
    },
  },
  duoContainer: {
    border: '1px solid #E1A200',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    marginBottom: '1rem',
    maxWidth: '380px',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: '0 1rem',
    borderRadius: '10px',
    '& .list': {
      width: '100%',
      '& img': {
        marginLeft: 0,
      },
    },
  },
  duo: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0 0rem 1rem 0.5rem',

    '& .winner': {
      fontSize: '14px',
      color: '#00AB11',
      fontWeight: 600,
    },

    '& .score': {
      fontSize: '10px',
      color: '#E1A200',
      display: 'flex',
      gap: '10px',
      '& .points': {
        fontSize: '11px',
        color: 'white',
        fontWeight: 600,
      },
    },
  },
  list: {
    marginTop: '1.5rem',
    display: 'flex',
    justifyContent: 'space-between',
    width: '300px',
    fontSize: '16px',
    alignItems: 'center',
    '& .type': {
      color: '#5B5B5B',
      fontWeight: 600,
    },
    '& .points': {
      color: '#ffffff',
      fontWeight: 500,
    },
    margin: 0,

    '@media (max-width: 500px)': {
      width: '100%',
      padding: 0,
    },
  },
  listContainer: {
    color: '#E1A200',
    fontWeight: 600,
    '& img': {
      margin: '0 10px',
      width: '40px',
      height: '40px',
    },
  },
  bottom: {
    padding: '1rem 2rem',
  },
}));
