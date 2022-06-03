import { createContext, useReducer } from "react";
import QuizReducer from "./QuizReducer";
import {
  addQuiz,
  categoriesError,
  getCategories,
  getWalletTransactions,
} from "./QuizActions";
import { setUser } from "../auth/AuthActions";
import axios from "api/axios";

export const QuizContext = createContext();

const INITIAL_STATE = {
  categories: [],
  transactions: [],
  quiz: {},
  newUser: null,
};

export const QuizContextProvider = (props) => {
  const [state, dispatch] = useReducer(QuizReducer, INITIAL_STATE);

  const getCategoriesAsync = async () => {
    try {
      const res = await axios.get("/category/fetchAll");

      dispatch(getCategories(res.data.payload));
    } catch (err) {
      dispatch(categoriesError());
    }
  };

  const addQuizAsync = async (body) => {
    try {
      const res = await axios.post("/quiz/create", body);
      dispatch(addQuiz(res.data.payload));
      if (res.data.payload) {
        return res.data.payload;
      }
    } catch (err) {
      dispatch(categoriesError());
    }
  };

  const getWalletTransactionsAsync = async () => {
    try {
      const res = await axios.get("quiz/fetchWalletTransacions");
      console.log("wallet Transactions", res);

      dispatch(getWalletTransactions(res.data.payload));
    } catch (err) {
      dispatch(categoriesError());
    }
  };

  const setUserAsync = (res) => {
    console.log("setUser started");
    console.log(res);
    dispatch(setUser(res));
    console.log(state.newUser);
    console.log("setUser ended");
  };

  return (
    <QuizContext.Provider
      value={{
        categories: state.categories,
        transactions: state.transactions,
        quiz: state.quiz,
        newUser: state.newUser,
        getCategoriesAsync,
        addQuizAsync,
        getWalletTransactionsAsync,
        setUserAsync,
      }}
    >
      {props.children}
    </QuizContext.Provider>
  );
};
