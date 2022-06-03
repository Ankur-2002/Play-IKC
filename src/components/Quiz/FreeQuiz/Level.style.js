import { makeStyles } from '@mui/styles';
export const useStyle = makeStyles(theme => ({
  container: {
    '& .front': {
      position: 'absolute',
      top: '0%',
      width: '100%',
      objectFit: 'cover',
      zIndex: 5,
    },
    '& .back': {
      position: 'absolute',
      top: '0%',
      width: '100%',
      objectFit: 'cover',
      zIndex: 1,
    },
    '@media (max-width: 500px)': {
      '& .front': {
        display: 'none',
      },
      '& .back': {
        display: 'none',
      },
    },

    '& .mobileLogos': {
      '@media (min-width: 500px)': {
        display: 'none',
      },
      '& img': {
        position: 'absolute',
        top: 0,
      },
      '& .imageMobile1': {
        zIndex: 5,
        opacity: '80%',
        left: 0,
        width: '100%',
        transform: 'scaleX(-1)',
      },
      '& .imageMobile': {
        zIndex: 2,
        transform: 'scaleX(-1)',
        width: '100%',
      },
    },
  },
  wrapper: {
    display: 'flex',
    padding: '3rem 10rem',
    justifyContent: 'space-between',
    position: 'relative',

    '@media (max-width: 500px)': {
      padding: 0,
      margin: '3rem 0',
    },
  },
  header: {
    padding: '4rem 0 0 4rem',
    zIndex: 10,
    '& span': {
      display: 'block',
      marginBottom: '5px',
      fontSize: '20px',
      fontWeight: '600',
      color: 'white',
      '@media (max-width: 500px)': {
        fontSize: '12px',
      },
    },
    '@media (max-width: 500px)': {
      padding: '1rem 0 5rem 4rem',
    },
    '& .title': {
      fontSize: '30px',
      color: '#E1A200',
      '@media (max-width: 500px)': {
        fontSize: '20px',
      },
    },
  },
  imageContainer: {
    zIndex: 10,
    '& .image': {
      width: '400px',
      '@media (max-width: 500px)': {
        display: 'none',
      },
    },
  },
  cards: {
    margin: '6rem 0',
    display: 'grid',
    gridTemplateColumns: 'auto auto auto',
    justifyContent: 'center',
    gap: '15px',
    overflow: 'visible',
    width: '100%',

    '@media (max-width: 500px)': {
      gridTemplateColumns: 'auto',
    },
  },
  bottomContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
  },
  card: {
    width: '190px',
    height: '150px',
    overflow: 'hidden',
    '@media (max-width: 500px)': {
      width: '175px',
      height: '150px',
    },

    '@media (max-width: 400px)': {
      width: '165px',
      height: '150px',
    },

    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: '#0F0F0F',
    borderRadius: '10px',
    // padding: '25px 15px 15px 15px',
    boxSizing: 'border-box',
    border: '2px solid #5B5B5B',
    gap: '10px',
    '& .buttoncontainer': {
      // position: 'absolute',
      // bottom: '-10%',
      zIndex: 100,
      minWidth: '50px',
      padding: '5px 10px',
      border: 'none',
      '& a': {
        textDecoration: 'none',
        color: 'white',
        fontSize: '13px',
      },

      borderRadius: '0px',
    },
    '& .unlock': {
      background: 'linear-gradient(92.86deg, #E1A200 0%, #FF5C00 100%)',
    },
    '& .lock': {
      background: '#5B5B5B',
    },
    '& .imageSide': {
      padding: '1rem',
    },
    '& .colorTitle': {
      '& .title': {
        color: '#FF5C00',
      },
    },
    '& .description': {
      '& span': {
        display: 'block',
        fontSize: '14px',
      },
      '& .title': {
        fontWeight: 700,
        fontSize: '18px',
        // textAlign: 'center',
      },
      paddingLeft: '5px',
    },
  },

  topbar: {
    gridColumn: '1 / span4',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: '#050505',
    padding: '2rem 1rem',
    fontSize: '18px',
    border: '2px solid #5B5B5B',
    borderRadius: '10px',

    '& .bulb': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '18px',
      gap: '10px',
      margin: 0,
      cursor: 'pointer',
    },
    color: '#E1A200',

    fontWeight: 600,
  },
}));
