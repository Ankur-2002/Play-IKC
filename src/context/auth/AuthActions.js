import { authTypes } from "../types";

export const LoginStart = () => ({
  type: authTypes.LOGIN_START,
}); 

export const LoginSuccess = (user) => ({
  type: authTypes.LOGIN_SUCCESS,
  payload: user,
});

export const LoginFailure = (error) => ({
  type: authTypes.LOGIN_FAILURE,
  payload: error,
});

export const setUser = (user) => ({
  type: authTypes.SET_USER,
  payload: user,
});
