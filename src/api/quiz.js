import axios from "./axios";
import _ from "lodash";

// QUIZ API

// Getting the Quiz according to type
export const fetchQuiz = (link) => {
  return () =>
    axios
      .get(`/quiz/${link}`)
      .then((response) => _.get(response, "data.payload.quizzes", []))
      .catch((error) => error && error.response && error.response.data);
};

// Get Quiz Details
export const getQuizDetails = (quizID) => {
  return () =>
    axios
      .get(`/quiz/${quizID}/fetch`)
      .then((response) => _.get(response, "data.payload[0]", {}))
      .catch((error) => error && error.response && error.response.data);
};

// Start Quiz Response for classic quiz
export const getStartQuiz = (quizID) => {
  return () =>
    axios
      .get(`/quiz/start?quizId=${quizID}`)
      .then((response) => response)
      .catch((error) => error && error.response && error.response.data);
};

// Register for Quiz
export const registerQuiz = (quizID) => {
  return () =>
    axios
      .post(`/quiz/register?quizId=${quizID}`)
      .then((response) => response)
      .catch((error) => error && error.response && error.response.data);
};

// Start Quiz
export const startQuiz = (quizId) => {
  let URL = "";
  if (window.location.href.includes("free"))
    URL = `/common/quiz/start?quizId=${quizId}`;
  else {
    URL = `/quiz/start?quizId=${quizId}`;
  }

  return () =>
    axios
      .get(URL)
      .then((response) => response)
      .catch((error) => error && error.response && error.response.data);
};

// End Quiz
export const endQuiz = (resultId) => {
  // TODO: check ifFreebie logic
  let URL = "";
  if (window.location.href.includes("free"))
    URL = `/quiz/end?resultId=${resultId}`;
  else URL = `/common/quiz/end?resultId=${resultId}`;

  return () =>
    axios
      .get(URL)
      .then((response) => response)
      .catch((error) => error && error.response && error.response.data);
};

// Submit Answer
export const submitAnswerQuiz = (
  resultId,
  questionId,
  answer,
  currentScore,
  isFreebie
) => {
  let URL = "";
  if (isFreebie === false) {
    URL = `/quiz/submitAnswer?resultId=${resultId}&quesId=${questionId}&answer=${answer}&score=${currentScore}`;
  } else {
    URL = `/common/quiz/submitAnswer?resultId=${resultId}&quesId=${questionId}&answer=${answer}&score=${currentScore}`;
  }

  return () =>
    axios
      .get(URL)
      .then((response) => _.get(response, "data.payload", {}))
      .catch((error) => error && error.response && error.response.data);
};

// Getting the Leader board for the quizId
export const getLeaderboard = (id) => {
  return () =>
    axios
      .get(`/quiz/${id}/leaderboard`)
      .then((response) => _.get(response, "data.payload.result", []))
      .catch((error) => error && error.response && error.response.data);
};

// Create a quiz
export const createQuiz = (data) => {
  return () =>
    axios
      .post("/quiz/create", data)
      .then((response) => response.data)
      .catch((error) => error && error.response && error.response.data);
};

// Upload file to a quiz
export const uploadFileQuiz = (quizID, data) => {
  return () =>
    axios
      .post(`/quiz/upload/${quizID}`, data)
      .then((response) => response)
      .catch((error) => error && error.response && error.response);
};

// Pay with Paytm
export const payWithPaytm = (amount) => {
  return () =>
    axios
      .post(`/quiz/paymentWithPaytm?amount=${amount}`)
      .then((response) => response.data)
      .catch((error) => error && error.response && error.response);
};
