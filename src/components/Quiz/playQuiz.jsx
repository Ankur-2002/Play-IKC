import { Box, Button, Typography, Container } from "@mui/material";
import React, { useEffect, useState, useRef } from "react";
import { useHistory } from "react-router";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";

import { endQuiz, getQuizDetails, startQuiz } from "api/quiz";
import { Spinner } from "assets";
import LeaderBoard from "components/LeaderBoard";
import QuizContainer from "components/Quiz/QuizContainer";
import CustomModal from "common/CustomModal";
import KLogoRed from "assets/images/k_logo_red.png";

function PlayQuiz({ endQuiz, getQuizDetails, startQuiz }) {
  const [quizData, setQuizData] = useState(null);
  let { quizId } = useParams();
  const history = useHistory();

  const [questionIdx, setQuestionIdx] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [resultId, setResultId] = useState();
  const [result, setResult] = useState(null);
  const [end, setEnded] = useState(false);

  useEffect(() => {
    const handleStart = async () => {
      try {
        const res = await startQuiz(quizId);
        if (res.statusCode === 400) {
          handleErrorModal();
          console.log("error");
        } else {
          const Questions = res.data?.payload?.data?.questions;
          const ResultId = res.data?.payload?.data?.resultId;
          setQuestions(Questions);
          setResultId(ResultId);
        }
      } catch (error) {
        console.log(error);
      }
    };

    handleStart();
  }, [quizId, startQuiz]);

  useEffect(() => {
    getQuizDetails(quizId)
      .then((data) => setQuizData(data))
      .catch((error) => console.log(error));
  }, [quizId, getQuizDetails]);

  useEffect(() => {
    console.log(questionIdx, questions.length);
    console.log(end);
    if (questionIdx >= questions.length && questionIdx !== 0) {
      console.log("Triggered");
      // const handleEndQuiz = async () => {
      //   try {
      //     const response = await endQuiz(resultId);
      //     console.log(response);
      //     setResult(response?.data?.payload);
      //     console.log(result);
      //     setEnded(true);
      //   } catch (error) {
      //     console.log(error);
      //   }
      // };
      // handleEndQuiz();
    }
  }, [end, endQuiz, questionIdx, questions.length, resultId]);

  const handleQuizEnd = async () => {
    try {
      const response = await endQuiz(resultId);
      console.log(response);
      setResult(response?.data?.payload);
      console.log(result);
      setEnded(true);
    } catch (error) {
      console.log(error);
    }
  };

  // show warning modal when user click on end quiz button
  const [showWarningModal, setShowWarningModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);

  const handleOpenWarningModal = () => setShowWarningModal(true);
  const handleCloseWarningModal = () => setShowWarningModal(false);

  const handleErrorModal = () => setShowErrorModal(true);
  const closeErrorModal = () => setShowErrorModal(false);

  return quizData ? (
    <div className="play__container">
      <div style={{ display: "flex", flexDirection: "column" }}>
        {questions.length && questionIdx < questions.length ? (
          <>
            <QuizContainer
              completed={false}
              isFreebie={quizData.isFreebie}
              questions={questions}
              setQuestionIdx={setQuestionIdx}
              question={questions[questionIdx]}
              ResultId={resultId}
              questionIdx={questionIdx}
              setNextQues={true}
              handleQuizEnd={handleQuizEnd}
              quizResult={result}
            />

            <div className="final__entry">
              <h2 className="final__entry__title">
                Final Entry:
                <span
                  style={{ color: "var(--red)", fontFamily: "Paytone One" }}
                >
                  60m 00s
                </span>
              </h2>
              <hr style={{ width: "80%", margin: " 2% auto" }} />
              <div className="description__btns">
                <h4>Entry Fee: {quizData.poolAmount} tokens</h4>
                <h4>
                  Prize Pool:
                  <img width="20px" src={KLogoRed} alt="K" />
                  25.00
                </h4>
                <h4>Questions: {quizData.metadata.maxQuestions}</h4>
                <h4>Global Plays:225</h4>
                <h4>Max Plays per Player: {quizData.numberOfTimes}</h4>
                <h4>Free Plays: 7</h4>
              </div>
              <h3 className="game__text" style={{ color: "var(--dark)" }}>
                A 10 question quiz on the films of The Hobbit. Top 10 players
                split the prize pool.
              </h3>
              <div className="final__entry__btns">
                <button>View Prize Split</button>
                <button>Share quiz</button>
                <button
                  className="submmit"
                  variant="outlined"
                  onClick={handleOpenWarningModal}
                >
                  Quit Game
                </button>
              </div>
            </div>
            <LeaderBoard id={quizId} />
          </>
        ) : (
          <Spinner />
        )}
      </div>

      {/* warning modal that will prevent user from quitting accidentally */}
      <CustomModal
        open={showWarningModal}
        onClose={handleCloseWarningModal}
        title="Are you sure you want to leave this quiz?"
        body={
          <>
            <Typography variant="h6" gutterBottom align="center">
              You will not be able to continue this quiz if you leave the page.
              Your current score will be added to the leaderBoard.
            </Typography>

            <Box display="flex" justifyContent={"space-around"}>
              <Button
                variant="contained"
                color="error"
                sx={{
                  fontSize: "1.4rem",
                  textTransform: "capitalize",
                }}
                onClick={() => history.push("/")}
              >
                Leave Quiz
              </Button>
              <Button
                variant="contained"
                color="success"
                sx={{
                  fontSize: "1.4rem",
                  textTransform: "capitalize",
                }}
                onClick={handleCloseWarningModal}
              >
                Continue Playing
              </Button>
            </Box>
          </>
        }
      />
      <CustomModal
        open={showErrorModal}
        onClose={closeErrorModal}
        title="Quiz not started yet."
        body={
          <>
            {/* <Typography variant="h6" gutterBottom align="center">
              You will not be able to continue this quiz if you leave the page.
              Your current score will be added to the leaderBoard.
            </Typography> */}

            <Box display="flex" justifyContent={"space-around"}>
              <Button
                variant="contained"
                color="error"
                sx={{
                  fontSize: "1.4rem",
                  textTransform: "capitalize",
                }}
                onClick={() => history.push("/quiz/fetch/classic")}
              >
                Go Back
              </Button>
              {/* <Button
                variant="contained"
                color="success"
                sx={{
                  fontSize: "1.4rem",
                  textTransform: "capitalize",
                }}
                onClick={handleCloseWarningModal}
              >
                Continue Playing
              </Button> */}
            </Box>
          </>
        }
      />
    </div>
  ) : (
    <Spinner />
  );
}

const mapDispatchToProps = {
  endQuiz,
  getQuizDetails,
  startQuiz,
};

export default connect(null, mapDispatchToProps)(PlayQuiz);
