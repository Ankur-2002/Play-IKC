import { USER_SERVER } from "config";

export const startQuiz = (quizId) => {
  return async (dispatch) => {
    const res = await fetch(
      `${USER_SERVER}/singlePlayerQuiz/start${
        localStorage.getItem("token") ? "" : "/guest"
      }?quizId=${quizId}`,
      {
        headers: localStorage.getItem("token")
          ? {
              "Content-type": "application/json",
              Authorization:
                "Bearer " + JSON.parse(localStorage?.getItem("token")),
            }
          : {},
      }
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response, "DATA COMING");
        dispatch({
          type: "SET_QUESTION",
          payload: response.payload,
        });
        return response.payload;
      })
      .catch((error) => error && error.response);
  };
};
