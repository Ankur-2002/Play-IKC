import axios from './axios';
import _ from 'lodash';
import Axios from 'axios';

import { USER_SERVER } from 'config';
import fetchEndpoints from './fetchEndpoints';

// fetchEndpoints (method,Endpoint,BaseURL)
const user = JSON.parse(localStorage.getItem('user'));

export const fetchCategories = async () => {
  return fetch(`${USER_SERVER}/quiz/fetchAllCategories`)
    .then(response => response.json())
    .then(response => {
      return response.payload;
    })
    .catch(error => error && error.response);
};

//fetch quizzes by category/ levels of a category
export const getLevelsOfCategory = async categoryId => {
  return await fetch(
    `${USER_SERVER}/singlePlayerQuiz/fetchQuiz${
      localStorage.getItem('token') ? '?' : '/guest?'
    }categoryId=${categoryId}`,
    {
      headers: localStorage.getItem('token')
        ? {
            'Content-type': 'application/json',
            Authorization:
              'Bearer ' + JSON.parse(localStorage?.getItem('token')),
          }
        : {},
    }
  )
    .then(response => response.json())
    .then(response => {
      return _.get(response, 'payload', response.payload);
    })
    .catch(error => error && error.response);
};

// fetch Quiz details
export const startQuiz = async quizId => {
  return fetch(
    `${USER_SERVER}/singlePlayerQuiz/start${
      localStorage.getItem('token') ? '' : '/guest'
    }?quizId=${quizId}`,
    {
      headers: localStorage.getItem('token')
        ? {
            'Content-type': 'application/json',
            Authorization:
              'Bearer ' + JSON.parse(localStorage?.getItem('token')),
          }
        : {},
    }
  )
    .then(response => response.json())
    .then(response => {
      return response.payload;
    })
    .catch(error => error && error.response);
};

// Register for Quiz
export const registerQuiz = quizID => {
  return () =>
    axios
      .post(`/quiz/register?quizId=${quizID}`)
      .then(response => response)
      .catch(error => error && error.response && error.response.data);
};

// Start Quiz
// export const startQuiz = (quizId) => {
//   let URL = '';
//   if (window.location.href.includes('free'))
//     URL = `/common/quiz/start?quizId=${quizId}`;
//   else {
//     URL = `/quiz/start?quizId=${quizId}`;
//   }

//   return () =>
//     axios
//       .get(URL)
//       .then((response) => response)
//       .catch((error) => error && error.response && error.response.data);
// };

// End Quiz
export const endQuiz = async resultId => {
  // TODO: check ifFreebie logic
  let URL = '';
  // if (window.location.href.includes('free'))
  URL = `/quiz/end/guest?resultId=${resultId}`;
  // else URL = `/common/quiz/end?resultId=${resultId}`;

  return fetch(USER_SERVER + URL)
    .then(response => response.json())
    .then(response => {
      return response;
    })
    .catch(error => error && error.response);

  // return axios
  //   .get(URL)
  //   .then((response) => response)
  //   .catch((error) => error && error.response && error.response.data);
};

// Submit Answer
export const submitAnswerQuiz =
  (resultId, questionId, answer, currentScore, isFreebie) => async dispatch => {
    let URL = '';
    if (isFreebie === false) {
      URL = `/quiz/submitAnswer/guest?resultId=${resultId}&quesId=${questionId}&answer=${answer}&score=${currentScore}`;
    } else {
      URL = `/common/quiz/submitAnswer?resultId=${resultId}&quesId=${questionId}&answer=${answer}&score=${currentScore}`;
    }

    return fetch(USER_SERVER + URL)
      .then(response => response.json())
      .then(response => {
        return response.payload;
      })
      .catch(error => error && error.response);

    // axios
    //   .get(URL)
    //   .then((response) => response?.data?.payload)
    //   .catch((error) => error && error.response && error.response.data);
  };

// Getting the Leader board for the quizId
export const getLeaderboard = id => {
  return () =>
    axios
      .get(`/quiz/${id}/leaderboard`)
      .then(response => _.get(response, 'data.payload.result', []))
      .catch(error => error && error.response && error.response.data);
};
