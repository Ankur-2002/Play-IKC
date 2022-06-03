import axios from './axios';
import _ from 'lodash';
import fetchEndpoints from './fetchEndpoints';

// Fetch all categories
export const fetchCategories = async () => {
  return fetchEndpoints(`"/category/fetchAll"`)
    .then(response => response)
    .catch(error => _.get(error, 'error.response.data', {}));

  // return axios
  //   .get("/category/fetchAll")
  //   .then((response) => response)
  //   .catch((error) => _.get(error, "error.response.data", {}));
};

// Create Play with Friend Quiz
export const createQuiz = async categoryId => {
  console.log(categoryId);
  return await axios
    .post(`/duoQuiz/create?categoryId=${categoryId}`)
    .then(response => response)
    .catch(error => _.get(error, 'error.response.data', {}));
};

// Join room
export const joinQuiz = async roomCode => {
  return axios
    .post(`/duoQuiz/join?code=${roomCode}`)
    .then(response => response)
    .catch(error => _.get(error, 'error.response.data', {}));
};

// Check quiz creator
export const getIsCreator = async roomId => {
  return axios
    .post(`duoQuiz/isCreator?roomId=${roomId}`)
    .then(response => response)
    .catch(error => _.get(error, 'error.response.data', {}));
};
