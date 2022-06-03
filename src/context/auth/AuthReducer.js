import { authTypes } from "../types";

const AuthReducer = (state, action) => {
  switch (action.type) {
    case authTypes.LOGIN_START:
      return {
        isUserLoggedIn: false,
        user: null,
        ikcAmount: 0,
        isFetching: true,
        error: false,
      };
    case authTypes.LOGIN_SUCCESS:
      return {
        isUserLoggedIn: true,
        user: action.payload,
        ikcAmount: action.status,
        isFetching: false,
        error: false,
      };
    case authTypes.LOGIN_FAILURE:
      return {
        isUserLoggedIn: false,
        user: undefined,
        ikcAmount: 0,
        isFetching: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default AuthReducer;
