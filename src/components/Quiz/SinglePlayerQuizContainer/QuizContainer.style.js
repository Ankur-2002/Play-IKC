import { makeStyles } from '@mui/styles';

export const useStyle = makeStyles(theme => ({
  scoreBoard: {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
    marginTop: '3rem',
    zIndex: 10,
    position: 'relative',
    '& .mid': {
      width: '280px',
      maxWidth: '100%',
      '@media (max-width: 500px)': {
        width: '130px',
      },
    },
  },

  cards: {
    minWidth: '140px',
    maxWidth: '160px',
    position: 'relative',
    '@media (max-width: 500px)': {
      minWidth: '110px',
      maxWidth: '110px',
    },
    minHeight: '90px',
    maxHeight: '100px',
    background: '#0F0F0F',
    zIndex: 10,
    border: '2px solid',
    borderColor: '#FF5C00',
    borderRadius: '10px',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    '& span': {
      color: '#5b5b5b',
      fontSize: '15px',
      fontWeight: 600,
      '@media (max-width: 500px)': {
        fontSize: '12px',
      },
    },

    '& :nth-child(1)': {
      color: '#ff5c00',
      fontSize: '18px',
    },
  },

  questionBoard: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: '80vh',

    '& .innerContainer': {
      width: '100%',
      '@media (max-width: 500px)': {
        padding: '0',
      },
      padding: '0 10rem',
    },
  },

  details: {
    marginTop: '2rem',
    '@media (max-width: 500px)': {
      padding: '0 1.4rem',
      margin: '2rem 0',
    },
  },

  questionContainer: {
    background: '#0f0f0f',
    zIndex: 100,
    position: 'relative',
    right: 0,
    left: 0,
    margin: 'auto',
    border: '2px solid',
    borderColor: '#FF5C00',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '10px',
    borderRadius: '10px',
  },
  header: {
    padding: '2rem 5rem',
    maxWidth: '700px',

    '@media (max-width: 500px)': {
      padding: '2rem 3rem',
      textAlign: 'center',
    },
  },
  sound: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    '& .number': {
      fontSize: '18px',
      fontWeight: 600,
      '& .first': {
        fontSize: '23px',
        color: '#FF5C00',
      },
    },
  },
  questions: {
    color: 'white',
    fontSize: '17px',
    padding: '1rem 3rem',
    '@media (max-width: 500px)': {
      padding: '0',
    },
  },
  options: {
    display: 'grid',
    gridTemplateColumns: 'auto auto',
    gap: '30px',
    paddingBottom: '3rem',
    '@media (max-width: 500px)': {
      gridTemplateColumns: 'auto',
    },
  },
  bottomPart: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0 1.4rem',
    marginBottom: '3rem',
    gap: '10px',
    '& .cards': {
      flex: 1,
    },
  },
}));
