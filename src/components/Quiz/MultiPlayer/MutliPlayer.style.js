import { makeStyles } from '@mui/styles';

export const useStyle = makeStyles(theme => ({
  container: {
    minHeight: '61vh',
    padding: '0 15rem',
    '@media (max-width: 1200px)': {
      padding: '0 8rem',
    },
    '@media (max-width: 800px)': {
      padding: '0 4rem',
    },
    '@media (max-width: 500px)': {
      padding: '0rem 0rem',
    },
  },

  imageContainer: {
    zIndex: 5,
    '& img': {
      width: '100%',
      position: 'absolute',
      top: '-5%',
      left: 0,
    },
    '& .image1': {
      zIndex: 10,
    },
    '& .image2': {},

    '@media (max-width: 500px)': {
      display: 'none',
    },
  },
  mobileImageContainer: {
    zIndex: 5,
    display: 'none',
    '@media (max-width: 500px)': {
      display: 'block',
    },
    '& img': {
      width: '100%',
      position: 'absolute',
      top: 0,
      left: 0,
    },
    '& .image1': {
      zIndex: 10,
      opacity: '50%',
    },
  },
  wrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    // padding: '0 15rem',
    // '@media (max-width: 1200px)': {
    //   padding: '0 8rem',
    // },
    // '@media (max-width: 800px)': {
    //   padding: '0 4rem',
    // },
    '@media (max-width: 500px)': {
      flexDirection: 'column',
      padding: 0,
    },
  },
  left: {
    zIndex: 10,
    display: 'flex',
    flexDirection: 'column',
    gap: '40px',
    paddingLeft: '2rem',
    marginTop: '4rem',
    '@media (max-width: 500px)': {
      padding: 0,
      alignItems: 'center',
      marginTop: '2rem',
    },
  },
  header: {
    padding: '3rem 0 0 0rem',
    '& span': {
      display: 'block',
      marginBottom: 10,
      fontWeight: 600,
      color: '#ffffff',
      fontSize: '15px',
      '@media (max-width: 500px)': {
        fontSize: '13px',
        fontWeight: 500,
      },
    },
    '& .title': {
      fontSize: '30px',
      color: '#E1A200',
      fontWeight: 600,

      position: 'relative',

      '& img': {
        position: 'absolute',
        top: '-100%',
        transform: 'scaleX(-1)',
        left: '-7%',
        zIndex: -1,

        '@media (max-width: 500px)': {
          display: 'none',
        },
      },
    },
    '@media (max-width: 500px)': {
      paddingLeft: '2rem',
    },
  },
  bottom: {
    display: 'flex',
    gap: '10px',
  },

  right: {
    marginTop: 0,
    alignSelf: 'start',
    zIndex: 10,
    position: 'relative',
    '& .img': {
      width: '350px',
      height: '300px',
      '@media (max-width: 500px)': {
        display: 'none',
      },
    },
  },
  multiPlayerWrapper: {
    '@media (max-width: 500px)': {
      marginTop: '7rem',
    },
  },
  bottomContainer: {
    maxWidth: '700px',
    borderTop: '1px solid',
  },
  bottomHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '16px',
    fontWeight: 600,
    borderBottom: '1px solid',
    color: '#5b5b5b',
    padding: '0.5rem 3rem 0 3rem',
    '& span': {
      cursor: 'pointer',
      padding: '0 3rem',
      zIndex: 100,
      '@media (max-width: 500px)': {
        padding: '0 1.5rem',
      },
    },
    '@media (max-width: 500px)': {
      padding: '0',
      alignItems: 'center',
    },
    '& .tab1': {
      borderBottom: props => (props.tab === 0 ? 'solid #E1A200' : ''),
      color: props => (props.tab === 0 ? '#E1A200' : ''),
    },
    '& .tab2': {
      borderBottom: props => (props.tab === 1 ? 'solid #E1A200' : ''),
      color: props => (props.tab === 1 ? '#E1A200' : ''),
    },
    '& .tab3': {
      borderBottom: props => (props.tab === 2 ? 'solid #E1A200' : ''),
      color: props => (props.tab === 2 ? '#E1A200' : ''),
    },
  },
  bottomList: {
    margin: '3rem 0',
    display: 'grid',
    gridTemplateColumns: props =>
      props.tab === 2 ? 'auto auto auto auto auto' : 'auto auto auto',

    gap: '20px',
    '@media (max-width: 500px)': {
      gridTemplateColumns: props =>
        props.tab === 2 ? 'auto auto ' : 'auto auto',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
}));
