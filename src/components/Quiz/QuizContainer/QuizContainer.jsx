import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { useCountUp } from "react-countup";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import { submitAnswerQuiz } from "api/quiz";
import { connect } from "react-redux";

// Assets
import correct_answer from "assets/audios/Correct-answer.mp3";
import music from "assets/audios/music.mp3";
import wrong_answer from "assets/audios/Wrong-answer.mp3";
import intermediate_answer from "assets/audios/intermediate_answer.mp3";
// import radial from "assets/videos/radial_ray2.mp4";
import QuestionMark from "assets/videos/question_mark.gif";
import NextQuestion from "assets/videos/next_question.gif";
import Result from "assets/videos/result.gif";
import "./rough.css";

import OptionContainer from "./OptionContainer";
import QuizInfo from "./QuizInfo";

const useAudio = (url, userToken) => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(userToken);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing, audio]);

  useEffect(() => {
    audio.addEventListener("ended", () => setPlaying(false));
    return () => {
      audio.removeEventListener("ended", () => setPlaying(false));
    };
  }, [audio]);

  return [playing, toggle];
};

function Rough({
  completed,
  isFreebie,
  questions,
  question,
  ResultId,
  setQuestionIdx,
  questionIdx,
  setNextQues,
  submitAnswerQuiz,
  handleQuizEnd,
  quizResult,
}) {

  console.log(
    "NEXT_QUESTION_SET ########################################",
    setNextQues
  );

  const countUpRef = React.useRef(null);

  const userToken = JSON.parse(localStorage.getItem("user")) || null;

  const [playing, toggle] = useAudio(music, userToken);
  const [score, setScore] = useState(0);
  const [questionRem, setQuestionRem] = useState(questions.length);
  // const [points, setPoints] = useState(0);
  // const [classs, setClasss] = useState("");
  const [show, setShow] = useState(false);

  const [showNext, setNext] = useState(false);
  const [result, setResult] = useState(false);
  const [disable, setDisable] = useState(false);
  const [showScores, setShowScores] = useState(false);
  const [intermediate, setIntermediate] = useState({
    one: "",
    two: "",
    three: "",
    four: "",
  });
  // const [correctOption, setCorrectOption] = useState(null);
  const [button, setButton] = useState({
    one: "",
    two: "",
    three: "",
    four: "",
  });

  useEffect(() => {
    if (!show && !showNext) {
      setTimeout(() => {
        setShow(true);
        update(0);
      }, 6500);
    }

    if (result) {
      setShow(false);
      setNext(false);
      setTimeout(() => {
        setShowScores(true);
      }, 2000);
    }
  }, [result]);

  if (showNext) {
    setTimeout(function () {
      setNext(false);
      update(0);

      setShow(true);
    }, 3000);
  }

  const next = async (e) => {
    // setClasss(null);
    setButton({ one: "", two: "", three: "", four: "" });
    setIntermediate({ one: "", two: "", three: "", four: "" });
    setQuestionIdx((prev) => ++prev);
    // setPoints(countUpRef?.current?.innerHTML)
    setShow(false);
    setNext(true);
    setDisable(false);
  };


  // 
  const handleSelectOption = async (x, type) => {

    
    console.log("########", x, type);
    setDisable(true);
    const current = countUpRef?.current?.innerHTML;
    console.log(ResultId, question._id, x, current);
    setIntermediate((prev) => ({ ...prev, [type]: "intermediate" }));
    const intermediateAudioTune = new Audio(intermediate_answer);
    intermediateAudioTune.play();

    if (setNextQues === true) {
      try {
        const { optionMarked, correctOption, total } = await submitAnswerQuiz(
          ResultId,
          question._id,
          x,
          current,
          isFreebie
        );

        console.log(correctOption, optionMarked, total);

        if (optionMarked === correctOption) {
          setIntermediate(false);
          setButton((prev) => ({ ...prev, [type]: "select" }));
          const audioTune = new Audio(correct_answer);
          audioTune.play();
          setScore(total);
        } else {
          setIntermediate(false);
          setButton((prev) => ({ ...prev, [type]: "wrong" }));
          const audioTune = new Audio(wrong_answer);
          audioTune.play();
        }

        if (questionRem > 1) {
          setTimeout(() => {
            next();
            setQuestionRem(questions.length - questionIdx - 1);
            start();
          }, 3000);
        } else {
          setQuestionRem(0);
          await handleQuizEnd();
          console.log("End");
          setResult(true);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
  const { start, pauseResume, update } = useCountUp({
    ref: countUpRef,
    duration: 15,
    start: 10000,
    end: 10000,
    onEnd: async () => {
      if (questionRem > 1) {
        const audioTune = new Audio(wrong_answer);
        audioTune.play();
        setTimeout(() => {
          next();
          setQuestionRem(questions.length - questionIdx - 1);
          start();
        }, 3000);
      } else {
        const audioTune = new Audio(wrong_answer);
        audioTune.play();
        setQuestionRem(0);
        await handleQuizEnd();
        console.log("End");
        setResult(true);
      }
    },
  });

  return (
    <div>
      <div className="quiz_landing_container">
        <div className="quiz_landing_info">
          <QuizInfo value={score} text="Your Current Score" />
          <QuizInfo
            value={`${questionRem}/${questions.length}`}
            text="Questions Remaining"
          />
          <QuizInfo count={countUpRef} text="Points" />
          <QuizInfo value={0} text="Your Best Score" />
          <QuizInfo value={0} text="LeaderBoard First Place" />
        </div>
      </div>
      <div className="detail__question">
        <div className="detail__wrapper">
          <div className="detail__wrapper2">
            <div className="detail__wrapper3">
              {!show && !showNext ? (
                <div className="quiz__container__results">
                  {!result ? (
                    <div className="gif">
                      <img
                        className="pre__gif"
                        src={QuestionMark}
                        alt="Building Quiz"
                      />
                    </div>
                  ) : (
                    <div className="quiz__container__results">
                      {!showScores ? (
                        <div className="result__gif__wrapper">
                          <div className="result__gif">
                            <img
                              className="post__gif"
                              src={Result}
                              alt="Result"
                            />
                          </div>
                        </div>
                      ) : (
                        <div className="result__box">
                          <div className="result__gif__wrapper">
                            <div className="result__gif">
                              <img
                                className="post__gif"
                                src={Result}
                                alt="Result"
                              />
                            </div>
                          </div>
                          <div className="result__box__wrapper">
                            {quizResult && (
                              <div className="results">
                                <div className="result__row">
                                  <h3
                                    style={{
                                      color: "var(--red)",
                                      fontWeight: "900",
                                      marginRight: "16px",
                                    }}
                                  >
                                    Correct Answers
                                  </h3>
                                  <h3 className="result__text__black">{`${quizResult?.countCorrect} / ${quizResult?.maxQuestions}`}</h3>
                                </div>
                                <div className="result__row">
                                  <h3
                                    style={{
                                      color: "var(--red)",
                                      fontWeight: "900",
                                      marginRight: "16px",
                                    }}
                                  >
                                    Total Score
                                  </h3>
                                  <h3 className="result__text__black">
                                    {quizResult?.score}
                                  </h3>
                                </div>
                                <div className="result__row">
                                  <h3
                                    style={{
                                      color: "var(--red)",
                                      fontWeight: "900",
                                      marginRight: "16px",
                                    }}
                                  >
                                    Number of Attempts
                                  </h3>
                                  <h3 className="result__text__black">
                                    {quizResult?.attempts}
                                  </h3>
                                </div>
                              </div>
                            )}
                          </div>

                          {/* <div className="result__gif__wrapper">
                        <div className="result__gif">
                          <img
                            className="post__gif"
                            src={Result}
                            alt="Result"
                          />
                        </div>
                      </div> */}
                        </div>
                      )}
                    </div>
                  )}
                  {/* <video controls width="100%" height="100%" autoPlay={true}>
                    <source src={radial} type="video/mp4" />
                    <source src={radial} type="video/ogg" />
                  </video> */}
                </div>
              ) : (
                ""
              )}
              <div className="answer__section detail__content">
                {!show && !showNext ? (
                  // <div id="bounce-in" className="bounce-in">
                  //   <h1 className="bounce-in-text">Get Ready</h1>
                  // </div>
                  <></>
                ) : showNext ? (
                  <img
                    className="mid__gif"
                    src={NextQuestion}
                    alt="Next Question"
                  />
                ) : (
                  // <div id="bounce-in" className="bounce-in">
                  //   <h1 className="bounce-in-text">Next Question</h1>
                  // </div>
                  <>
                    <p className="question animated dts fadeInDown">
                      <span className="classic__question">
                        {question !== null
                          ? question.content.question
                          : "Loading..."}
                      </span>
                    </p>
                    <div className="question_image_container">
                      <div className="answer__container">
                        {["one", "two", "three", "four"].map((value, index) => (
                          <OptionContainer
                            key={value}
                            index={index}
                            value={value}
                            intermediate={intermediate}
                            pauseResume={pauseResume}
                            handleSelectOption={handleSelectOption}
                            button={button}
                            question={question}
                            disable={disable}
                          />
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="wrapper_sound__on__off">
          <div className="sound__on__off">
            {playing ? <VolumeUpIcon /> : <VolumeOffIcon />}
            {toggle}
            <Button style={{ color: "var(--light)" }} onClick={toggle}>
              {playing ? "Sound on" : "Sound off"}
            </Button>
          </div>
        </div>

        {/* <div className="quiz_landing_container">
          <div className="quiz_landing_info">
            <QuizInfo value={score} text="Your Current Score" />
            <QuizInfo
              value={`${questionRem}/${questions.length}`}
              text="Questions Remaining"
            />
            <QuizInfo count={countUpRef} text="Points" />
            <QuizInfo value={0} text="Your Best Score" />
            <QuizInfo value={0} text="LeaderBoard First Place" />
          </div>
        </div> */}
      </div>
    </div>
  );
}

const mapDispatchToProps = {
  submitAnswerQuiz,
};

// mapStatesToProps (null = not subscribed to state change), mapDispatchToProps
export default connect(null, mapDispatchToProps)(Rough);
