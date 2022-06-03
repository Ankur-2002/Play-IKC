import { quizTypes } from "../types";

export const getCategories = (payload) => ({
  type: quizTypes.GET_CATEGORIES,
  payload,
});

export const categoriesError = () => ({
  type: quizTypes.CATEGORIES_ERROR,
});

export const addQuiz = (payload) => ({
  type: quizTypes.ADD_QUIZ,
  payload,
});

export const getWalletTransactions = (payload) => ({
  type: quizTypes.GET_WALLET_TRANSACTIONS,
  payload,
});

export const setUser = (payload) => ({
  type: quizTypes.SET_USER,
  payload,
});
