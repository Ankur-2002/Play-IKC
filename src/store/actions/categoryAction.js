import { CATEGORY_FAILUTE, CATEGORY_SUCCESSFULL } from '../actions/index';
const { USER_SERVER } = require('config');

export const fetchAllCategories = () => {
  return async dispatch => {
    const res = await fetch(`${USER_SERVER}/quiz/fetchAllCategories`)
      .then(response => response.json())
      .then(response => {
        console.log(response);
        dispatch({
          type: CATEGORY_SUCCESSFULL,
          payload: response.payload,
        });
        return response.payload;
      })
      .catch(error => {
        console.log(error);
      });
  };
};
