import { quizTypes } from "../types";

const quizReducer = (state, action) => {
  switch (action.type) {
    case quizTypes.GET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };
    case quizTypes.ADD_QUIZ:
      return {
        ...state,
        quiz: action.payload,
      };
    case quizTypes.GET_WALLET_TRANSACTIONS:
      return {
        ...state,
        transactions: action.payload,
      };
    case quizTypes.CATEGORIES_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case quizTypes.SET_USER:
      return {
        ...state,
        newUser: action.payload,
      };
    default:
      return state;
  }
};

export default quizReducer;
