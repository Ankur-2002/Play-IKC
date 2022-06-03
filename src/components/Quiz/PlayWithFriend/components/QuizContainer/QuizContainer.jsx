import React, { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import { useCountUp } from 'react-countup';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';

// Assets
import correct_answer from 'assets/audios/Correct-answer.mp3';
import music from 'assets/audios/music.mp3';
import wrong_answer from 'assets/audios/Wrong-answer.mp3';
// import radial from "assets/videos/radial_ray2.mp4";
import QuestionMark from 'assets/videos/question_mark.gif';
import NextQuestion from 'assets/videos/next_question.gif';
import Result from 'assets/videos/result.gif';
import './rough.css';

import OptionContainer from './OptionContainer';
import QuizInfo from './QuizInfo';

let timer;

const useAudio = (url, userToken) => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(userToken);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing, audio]);

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, [audio]);

  return [playing, toggle];
};

function Rough({
  questions,
  question,
  setQuestionIdx,
  submitAnswerQuiz,
  sendNextQuestion,
  questionsCorrect,
  score,
  secondPlayerQuestionsCorrect,
  secondPlayerScore,
  handleDisconnect,
  shouldShowNext,
  setShouldShowNext,
}) {
  const countUpRef = React.useRef(null);

  const userToken = JSON.parse(localStorage.getItem('user')) || null;

  const [playing, toggle] = useAudio(music, userToken);
  const [questionRem, setQuestionRem] = useState(questions);
  const [show, setShow] = useState(false);
  const [result, setResult] = useState(false);
  const [showNext, setNext] = useState(false);
  const [disable, setDisable] = useState(false);
  const [button, setButton] = useState({
    one: '',
    two: '',
    three: '',
    four: '',
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
    }
  }, [result]);

  if (showNext) {
    setTimeout(function async() {
      setNext(false);
      update(0);

      setShow(true);
    }, 3000);
  }

  useEffect(() => {
    handleNextQuestion();
  }, [shouldShowNext]);

  const next = async e => {
    setButton({ one: '', two: '', three: '', four: '' });
    // setQuestionIdx((prev) => ++prev);
    setShow(false);
    // await sendNextQuestion();
    setNext(true);
    setDisable(false);
  };

  const handleNextQuestion = () => {
    if (questionRem === 0 && !result) {
      setResult(true);
      setTimeout(async () => {
        await handleDisconnect();
      }, 4000);
      // update(0);
    } else {
      setTimeout(async () => {
        if (shouldShowNext) {
          await sendNextQuestion();
          next();
          setQuestionRem(questionRem - 1);
          start();
          setShouldShowNext(false);
        }
      }, 2000);
    }
  };

  const handleSelectOption = async (answer, type, noAnswer) => {
    // if (questionRem <= 0) {
    //   setResult(true);
    //   return;
    // }

    setDisable(true);
    const current = countUpRef?.current?.innerHTML;

    try {
      if (!noAnswer) {
        const optionMarked = answer;
        // const { optionMarked, correctOption, total } = await submitAnswerQuiz(
        await submitAnswerQuiz(question._id, answer, current);
        // console.log(lastAnswer, optionMarked, score);
        if (optionMarked === question?.answer) {
          setButton(prev => ({ ...prev, [type]: 'select' }));
          const audioTune = new Audio(correct_answer);
          audioTune.play();
          // setScore();
        } else {
          setButton(prev => ({ ...prev, [type]: 'wrong' }));
          const audioTune = new Audio(wrong_answer);
          audioTune.play();
        }
      }

      if (questionRem === 0 && !result) {
        setResult(true);
        setTimeout(async () => {
          await handleDisconnect();
          return;
        }, 4000);
        // update(0);
      } else {
        handleNextQuestion();
      }
    } catch (error) {
      console.log(error);
    }
    // }
  };

  const { start, pauseResume, update } = useCountUp({
    ref: countUpRef,
    duration: 10,
    start: 10000,
    end: 10000,
    // onStart: () => {
    //   timer = setTimeout(async () => {
    //     console.log("Timer Started");
    //     await handleSelectOption("", "", true);
    //   }, 20000);
    // },
    onEnd: () => {
      console.log('Ended');

      handleNextQuestion();
      setShouldShowNext(true);
      // await handleSelectOption("", "", true);
    },
    onPauseResume: async () => await handleSelectOption('', '', true),
  });

  return (
    <div>
      <div className="quiz_landing_container">
        <div className="quiz_landing_info">
          <QuizInfo color="#0000FF" value={score} text="Your Current Score" />
          <QuizInfo value={questionsCorrect} text="Correct Answers" />
          {/* <QuizInfo count={countUpRef} text="Points" /> */}
          <QuizInfo value={questionRem} text="Questions Remaining" />
          <QuizInfo count={countUpRef} text="Points" />
          <QuizInfo
            value={secondPlayerQuestionsCorrect}
            text="Second Player Correct Answers"
          />
          <QuizInfo
            color="#00FF00"
            value={secondPlayerScore}
            text="Second Player Score"
          />
        </div>
      </div>
      <div className="detail__question">
        <div className="detail__wrapper">
          <div className="detail__wrapper2">
            <div className="detail__wrapper3">
              {!show && !showNext ? (
                <div>
                  {!result ? (
                    <img
                      className="pre__gif"
                      src={QuestionMark}
                      loop={false}
                      alt="loading"
                    />
                  ) : (
                    <img className="post__gif" src={Result} alt="Results" />
                  )}
                </div>
              ) : (
                ''
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
                    alt="next question coming up"
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
                          : 'Loading...'}
                      </span>
                    </p>
                    <div className="question_image_container">
                      <div className="answer__container">
                        {['one', 'two', 'three', 'four'].map((value, index) => (
                          <OptionContainer
                            key={value}
                            index={index}
                            value={value}
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
            <Button style={{ color: 'var(--light)' }} onClick={toggle}>
              {playing ? 'Sound on' : 'Sound off'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rough;
