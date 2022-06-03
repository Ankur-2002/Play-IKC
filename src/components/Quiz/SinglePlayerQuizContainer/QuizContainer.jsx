import React, { useState, useEffect, useRef } from 'react';
import { submitAnswerQuiz } from 'api/quiz-single-player';
import { useMediaQuery } from 'react-responsive';
import { connect } from 'react-redux';
import correct_answer from 'assets/audios/Correct-answer.mp3';
import music from 'assets/audios/music.mp3';
import wrong_answer from 'assets/audios/Wrong-answer.mp3';
import intermediate_answer from 'assets/audios/intermediate_answer.mp3';
import QuizOption from './OptionContainer/QuizOptions';
import CountDown from './countDown/CountDown';
import { useStyle } from './QuizContainer.style';
import { Spinner } from 'assets';
import Sound from 'assets/images/sound.svg';
import Hint from 'assets/images/hint.svg';
import ResultContainer from './ResultContainer/ResultContainer';
import Model from '../../Model/Model';
import Ball from 'common/ball/Ball';
// const useAudio = (url, userToken) => {
//   const [audio] = useState(new Audio(url));
//   const [playing, setPlaying] = useState(userToken);

//   const toggle = () => setPlaying(!playing);

//   useEffect(() => {
//     playing ? audio.play() : audio.pause();
//   }, [playing, audio]);

//   useEffect(() => {
//     audio.addEventListener('ended', () => setPlaying(false));
//     return () => {
//       audio.removeEventListener('ended', () => setPlaying(false));
//     };
//   }, [audio]);

//   return [playing, toggle];
// };
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
  const countUpRef = useRef(null);

  const [hide, setHide] = useState(0);
  // const [answerId, setAnswerId] = useState(null);

  // const hideref = useRef(0);

  // const userToken = JSON?.parse(localStorage.getItem('user')) || null;

  // const [playing, toggle] = useAudio(music, userToken);
  const [end, setEnd] = useState(false);
  const [score, setScore] = useState(0);
  const [questionRem, setQuestionRem] = useState(questions.length);
  const [startAfter, setStartAfter] = useState(true);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [currentQuestionData, setCurrentQuestionData] = useState(questions[0]);
  const [options, setOptions] = useState([]);
  const startSound = new Audio(music);
  const [optionNum, setOptionNum] = useState(false);
  const [hint, setHint] = useState(4);
  const [model, setModel] = useState('');
  const [mute, setMute] = useState(false);
  useEffect(() => {
    if (currentQuestion >= questions.length) {
      countUpRef.current.stop();
      setQuestionRem(0);
      endQuiz();
      return;
    }
    setQuestionRem(questions.length - currentQuestion);
    setCurrentQuestionData(questions[currentQuestion]);
    setOptions(questions[currentQuestion].options);
    countUpRef.current.clearCountDown();
  }, [currentQuestion, questions]);

  useEffect(() => {
    const time = setInterval(() => {
      if (!mute) startSound.play();
    }, 4000);

    return () => {
      clearInterval(time);
      startSound.pause();
    };
  }, [mute]);

  useEffect(() => {
    const time = setTimeout(() => {
      setStartAfter(false);
      countUpRef.current.start();
    }, 5000);

    return () => {
      clearTimeout(time);
    };
  }, []);

  const endQuiz = async () => {
    startSound.pause();
    const response = await fetch(
      `https://backend.playikc.in/singlePlayerQuiz/end/guest?resultId=${ResultId}`
    )
      .then(res => res.json())
      .then(res => {
        setEnd(true);
      })
      .catch(err => console.log(err));
  };

  const submit = async (option_id, index) => {
    countUpRef.current.pause(countUpRef.current.getCount());
    const selectAudio = new Audio(intermediate_answer);
    const correct = new Audio(correct_answer);
    const wrong = new Audio(wrong_answer);
    selectAudio.play();

    const response = await fetch(
      `https://backend.playikc.in/singlePlayerQuiz/submitAnswer${
        localStorage.getItem('token') ? '' : '/guest'
      }?resultId=${ResultId}&quesId=${
        currentQuestionData._id
      }&answer=${option_id}&score=${countUpRef.current.getCount()}`,
      {
        headers: localStorage.getItem('token')
          ? {
              Authorization: `Bearer ${JSON.parse(
                localStorage.getItem('token')
              )}`,
            }
          : {},
      }
    )
      .then(res => {
        selectAudio.pause();
        return res.json();
      })
      .then(res => {
        if (res.payload.isCorrect)
          setScore(state => +state + +res.payload.points);
        if (res.payload.correctOption === option_id) {
          correct.play();
          document.getElementById(
            index + currentQuestionData.categoryId + 'id'
          ).style.background = '#00AB11';
        } else {
          wrong.play();
          var correctIndex = 0;
          currentQuestionData?.options?.forEach((element, index) => {
            if (element._id === res.payload.correctOption) {
              correctIndex = index;
              return index;
            }
          });
          document.getElementById(
            index + currentQuestionData.categoryId + 'id'
          ).style.background = '#FF6868';
          document.getElementById(
            correctIndex + currentQuestionData.categoryId + 'id'
          ).style.background = '#00AB11';
        }
      })
      .catch(err => console.log(err));

    setTimeout(() => {
      correct.pause();
      wrong.pause();
      setCurrentQuestion(currentQuestion + 1);
      setOptionNum(false);
      if (currentQuestion + 1 < questions.length) countUpRef.current.start();
    }, 1000);
  };
  const cutHint = async () => {
    setHide(hide ? hide * 2 : 1);
    setHint(hint - (hide ? hide * 2 : 1));
    setModel('');
    const hints = await fetch(
      `https://backend.playikc.in/singlePlayerQuiz/hint/guest?quesId=${currentQuestionData._id}`
    ).then(res => res.json());
    let data = options;
    let correct = data.filter(items => items._id === hints.payload.answer);
    let incorrect = data.filter(items => items._id !== hints.payload.answer);
    incorrect.reverse();
    incorrect.shift();
    const arr = incorrect.concat(correct);
    setOptions(prev => arr);
    countUpRef.current.start();
  };
  const handleHintClick = async () => {
    if (hint >= (hide ? hide * 2 : 1)) {
      setModel('hint');
    } else {
      console.log(hide ? hide * 2 : 1);
      setModel('insuffient');
    }
    // Do not stop time when we open a hint popup
    // countUpRef.current.pause(countUpRef.current.getCount());
  };

  const isLaptop = useMediaQuery({
    query: '(min-device-width: 1024px)',
  });
  const classes = useStyle();
  const MuteAll = () => {
    console.log('Muting');
    if (mute) {
      startSound.play();
    } else startSound.pause();
    setMute(!mute);
  };
  useEffect(() => {
    return () => {};
  }, []);
  return (
    <>
      <div className={classes.questionBoard}>
        <Ball width={100} top={'20%'} left={'-4%'} />
        <div className={end ? 'innerContainer' : ''}>
          {!end ? (
            <div className={classes.scoreBoard}>
              {isLaptop && (
                <div className={classes.cards}>
                  <span>{`${questionRem}/${questions.length}`}</span>
                  <span>Correct answers</span>
                </div>
              )}
              <div className={classes.cards}>
                <span>{score}</span>
                <span>Current score</span>
              </div>
              <div className={classes.cards + ' ' + 'mid'}>
                <CountDown
                  text="Points"
                  after={startAfter}
                  count={countUpRef}
                  key="CountDown"
                  currentQuestion={currentQuestion}
                  setCurrentQuestion={setCurrentQuestion}
                  submit={submit}
                />
              </div>
              <div className={classes.cards}>
                <Ball width={25} top="-20%" left={'-5%'} />
                <span>0</span>
                <span>Best score</span>
              </div>
              {isLaptop && (
                <div className={classes.cards}>
                  <span>{hint}</span>
                  <span>Hints left</span>
                </div>
              )}
            </div>
          ) : null}
          <div className={classes.details}>
            {startAfter ? (
              <Spinner />
            ) : end ? (
              <ResultContainer score={score} />
            ) : (
              <div className={classes.questionContainer}>
                <div className={classes.header}>
                  <div className={classes.sound}>
                    <img
                      style={{
                        cursor: 'pointer',
                      }}
                      onClick={() => setMute(!mute)}
                      src={Sound}
                      alt=""
                    />

                    <div className="number">
                      <span className="first"> 0 {currentQuestion + 1} </span>/
                      <span>0 {questions.length} </span>
                    </div>

                    <img
                      style={{
                        cursor: 'pointer',
                      }}
                      src={Hint}
                      alt=""
                      onClick={() => handleHintClick()}
                    />
                  </div>
                  <div className={classes.questions}>
                    {currentQuestion < questions.length &&
                    questions[currentQuestion] !== null
                      ? questions[currentQuestion].content.question
                      : ''}
                  </div>
                </div>
                <div
                  className={classes.options}
                  key={currentQuestionData.categoryId + options.length}
                >
                  {options?.map((options, index) => {
                    return (
                      <QuizOption
                        disable={optionNum}
                        setCurrentQuestion={setCurrentQuestion}
                        data={options}
                        index={index}
                        currentQuestion={currentQuestion}
                        resultId={questions.resultId}
                        submit={submit}
                        setOptionNum={() => setOptionNum(true)}
                        key={options._id + index}
                        id={options._id}
                        categoryId={currentQuestionData.categoryId}
                      />
                    );
                  })}
                </div>
                <Ball
                  width={50}
                  bottom={0}
                  right={'-10%'}
                  top={0}
                  margin={'auto'}
                />
              </div>
            )}
          </div>

          {!end && (
            <div className={classes.bottomPart}>
              {!isLaptop && (
                <div className={classes.cards + ' cards'}>
                  <span>{`${questionRem}/${questions.length}`}</span>
                  <span>Correct answers</span>
                </div>
              )}

              {!isLaptop && (
                <div className={classes.cards + ' cards'}>
                  <span>{hint}</span>
                  <span>Hints left</span>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      <Ball top={'50%'} bottom={0} margin="auto" width={30} />
      {model.length && (
        <Model
          description={
            model === 'hint'
              ? `Do you wish to use ${hide ? hide * 2 : 1} ?`
              : 'Do you wish to buy hints ?'
          }
          header={model === 'hint' ? 'HINT' : 'Insufficient Hints'}
          leftButton={'NO'}
          rightButton="YES"
          funOnRightButton={
            model === 'hint'
              ? cutHint
              : () => {
                  setModel('');
                }
          }
          funOnLeftButton={() => {
            countUpRef.current.start();
            setModel('');
          }}
        />
      )}
    </>
  );
}

const mapDispatchToProps = {
  submitAnswerQuiz,
};

export default connect(null, mapDispatchToProps)(Rough);
/**<div className="wrapper_sound__on__off">
        <div className="sound__on__off">
          {playing ? <VolumeUpIcon /> : <VolumeOffIcon />}
          {toggle}
          <Button style={{ color: 'var(--light)' }} onClick={toggle}>
            {playing ? 'Sound on' : 'Sound off'}
          </Button>
        </div>
        <div className="hint_button">
          <Button onClick={handleHintClick}>
            {hide >= 2 ? 'NO Hint' : hide === 1 ? '2nd Hint' : '1st Hint'}
          </Button>
        </div>
      </div> */
