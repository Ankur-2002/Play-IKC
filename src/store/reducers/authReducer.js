import { LOGOUT_SUCCESS } from 'store/actions';

const Initial_State = {
  isUserLoggedIn:
    localStorage?.getItem('isUserLoggedIn') === 'true' ? true : false,
  user: JSON?.parse(localStorage?.getItem('user')) ?? null,
  token: localStorage?.getItem('token') ? localStorage?.getItem('token') : null,
  ikcAmount: 0,
  isFetching: false,
  error: false,
};

const Authreducer = (state = Initial_State, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        user: action.payload.user,
        isUserLoggedIn: true,
        token: action.payload.token,
      };
    case LOGOUT_SUCCESS:
      return {
        isUserLoggedIn: false,
        user: null,
        token: null,
        isFetching: false,
        error: false,
      };
    default:
      return {
        ...state,
      };
  }
};

export default Authreducer;
