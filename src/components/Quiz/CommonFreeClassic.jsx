import React, { useEffect, useState } from "react";
import QuizCard from "./QuizCard";
import { Box } from "@mui/material";
import { Spinner } from "assets";
import { fetchQuiz } from "api/quiz";
import { connect } from "react-redux";

// import "./PlayNow.css";

function CommonFreeClassic({ link, fetchQuiz }) {
  const [fetchQues, setFetchQues] = useState([]);

  useEffect(() => {
    fetchQuiz(link)
      .then((data) => {
        setFetchQues(data);
      })
      .catch((err) => {
        console.log({ err });
        setFetchQues([]);
      });
  }, [link, fetchQuiz]);

  return (
    <div>
      {fetchQues?.length > 0 ? (
        <div
          className={`${
            link === "fetch" ? "freegames__cards" : "games__cards"
          }`}
        >
          {fetchQues?.map((item, idx) => {
            return <QuizCard quizDetail={item} key={idx} />;
          })}
        </div>
      ) : (
        <Box display="flex" justifyContent="center" alignItems="center">
          <Spinner />
        </Box>
      )}
    </div>
  );
}

const mapDispatchToProps = {
  fetchQuiz,
};

export default connect(null, mapDispatchToProps)(CommonFreeClassic);
