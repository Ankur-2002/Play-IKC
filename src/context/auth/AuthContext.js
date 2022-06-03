import { createContext, useEffect, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
  isUserLoggedIn:
    localStorage.getItem("isUserLoggedIn") === "true" ? true : false,
  user: JSON.parse(localStorage.getItem("user")) ?? null,
  ikcAmount: 0,
  // JSON.parse(localStorage.getItem("ikcAmount")) ?? 0,
  isFetching: false,
  error: false,
}; 

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
    localStorage.setItem("isUserLoggedIn", state.user !== null ? true : false);
    localStorage.setItem("ikcAmount", JSON.stringify(state.ikcAmount));
  }, [state.user, state.ikcAmount]);

  return (
    <AuthContext.Provider
      value={{
        isUserLoggedIn: state.isUserLoggedIn,
        user: state.user,
        ikcAmount: state.ikcAmount,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
