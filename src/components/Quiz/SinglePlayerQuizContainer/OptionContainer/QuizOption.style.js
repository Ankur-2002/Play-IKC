import { makeStyles } from '@mui/styles';

export const useStyle = makeStyles(theme => ({
  wrapper: {
    minWidth: '300px',
    maxWidth: '330px',
    borderRadius: '10px',
    boxSizing: 'border-box',
    background: 'red',
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    background: props => (props.blur ? 'grey' : '#EFEFEF'),
    width: '100%',
    fontSize: '18px',
    cursor: 'pointer',
  },
  list: {
    padding: 10,
    minWidth: '50px',
    textAlign: 'center',
    fontWeight: 700,
    background: 'linear-gradient(92.86deg, #E1A200 0%, #FF5C00 100%)',
    color: 'white',
  },
  text: {
    fontWeight: 600,
  },
}));
