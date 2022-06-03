const Initial_state = {
  resultId: null,
  questions: [],
};

const QuizReducer = (state = Initial_state, action) => {
  switch (action.type) {
    case 'SET_QUESTION':
      return {
        resultId: action.payload.resultId,
        questions: action.payload.questions,
      };
    default:
      return state;
  }
};
export default QuizReducer;
