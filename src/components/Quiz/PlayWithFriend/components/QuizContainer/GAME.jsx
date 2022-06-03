import { Spinner } from 'assets';
import CountDown from 'components/Quiz/SinglePlayerQuizContainer/countDown/CountDown';
import QuizOption from 'components/Quiz/SinglePlayerQuizContainer/OptionContainer/QuizOptions';
import { useStyle } from 'components/Quiz/SinglePlayerQuizContainer/QuizContainer.style';
import ResultContainer from 'components/Quiz/SinglePlayerQuizContainer/ResultContainer/ResultContainer';
import React, { useEffect, useRef, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import music from 'assets/audios/music.mp3';
import wrong_answer from 'assets/audios/Wrong-answer.mp3';
import intermediate_answer from 'assets/audios/intermediate_answer.mp3';

import correct_answer from 'assets/audios/Correct-answer.mp3';

import Sound from 'assets/images/sound.svg';
import Ball from 'common/ball/Ball';
const GAME = ({ isCreator, socket, roomId, userId }) => {
  const [correctAnswer1, setCorrectAnswer1] = useState(0);
  const [correctAnswer2, setCorrectAnswer2] = useState(0);
  const [currentScore1, setCurrentScore1] = useState(0);
  const [currentScore2, setCurrentScore2] = useState(0);
  const [subsribeQuestion, setSubscribeQuestion] = useState(false);
  const [question, setQuestion] = useState({});
  const [QuestionNo, setNumber] = useState(0);
  const countUpRef = useRef();
  const [startAfter, setStartAfter] = useState(true);
  const startSound = new Audio(music);
  const wrong = new Audio(wrong_answer);
  const correct = new Audio(correct_answer);
  const [end, setEnd] = useState(false);
  const classes = useStyle();
  const [optionNum, setOptionNum] = useState(false);

  const [checkIfBoth, setCheckIfBoth] = useState(0);

  useEffect(() => {
    startSound.play();
    const time = setTimeout(() => {
      setStartAfter(false);
      if (isCreator && !subsribeQuestion) {
        socket.emit('sendQuestion', { roomId: roomId }, async data => {});
        setSubscribeQuestion(true);
      }
    }, 3000);

    return () => {
      clearTimeout(time);
      startSound.pause();
    };
  }, []);

  useEffect(() => {
    socket.on('question', res => {
      console.log('Number');
      try {
        setQuestion(res[0]);
        countUpRef.current.reset();
        setOptionNum(false);
      } catch (er) {}
    });
  }, []);

  useEffect(() => {
    socket.on('answer', res => {
      if (res?.hasAnswered === 1) {
        setCheckIfBoth(1);
      } else if (res.hasAnswered === 2) {
        setCheckIfBoth(1);
      }
      if (res?.player1?.isCorrect === 1 && res.hasAnswered === 1) {
        setCorrectAnswer1(prev => prev + 1);
        setCurrentScore1(res?.player1?.score);
        if (isCreator) {
          correct.play();
          setTimeout(() => {
            correct.pause();
          }, 500);
        }
      } else if (res?.player2?.isCorrect === 1 && res.hasAnswered === 2) {
        setCorrectAnswer2(prev => prev + 1);
        setCurrentScore2(res?.player2?.score);
        if (!isCreator) {
          correct.play();
          setTimeout(() => {
            correct.pause();
          }, 500);
        }
      } else if (res?.hasAnswered === 3) {
        if (res?.player1?.isCorrect === 1) {
          setCorrectAnswer1(prev => prev + 1);
          setCurrentScore1(res?.player1?.score);
          if (isCreator) {
            correct.play();
            setTimeout(() => {
              correct.pause();
            }, 500);
          }
        } else if (res?.player2?.isCorrect === 1) {
          setCorrectAnswer2(prev => prev + 1);
          setCurrentScore2(res?.player2?.score);
          if (!isCreator) {
            correct.play();
            setTimeout(() => {
              correct.pause();
            }, 500);
          }
        } else {
          if (res?.player1?.isCorrect && isCreator) {
            wrong.play();
            setTimeout(() => {
              correct.pause();
            }, 100);
          }
          if (res.player2?.isCorrect && !isCreator) {
            wrong.play();
            setTimeout(() => {
              correct.pause();
            }, 100);
          }
        }
        // When both player answered then get the next question form the server
        if (isCreator) socket.emit('sendQuestion', { roomId }, data => {});
      } else if (res?.hasAnswered === 0) {
        sendNextQuestion();
      } else {
        if (res?.player1?.isCorrect && isCreator) {
          wrong.play();
          setTimeout(() => {
            correct.pause();
          }, 300);
        }
        if (res.player2?.isCorrect && !isCreator) {
          wrong.play();
          setTimeout(() => {
            correct.pause();
          }, 300);
        }
      }
    });
  }, []);

  useEffect(() => {
    socket.on('end', res => {
      console.log('Recived');
      socket.disconnect(true);
      setTimeout(() => {
        startSound.pause();
        setEnd(true);
      }, 1000);
    });
  }, []);

  const submitAnswer = answer => {
    countUpRef.current.pause(countUpRef.current.getCount());
    socket.emit('submitAnswer', {
      roomId,
      userId,
      answer: answer,
      questionId: question._id,
      points: countUpRef.current.getCount(),
    });
  };
  const handleDisconnect = () => {
    socket.emit('end', function () {
      socket.disconnect(true);
    });
    window.location.pathname = '/';
    window.location.reload();
  };
  const isLaptop = useMediaQuery({
    query: '(min-device-width: 1024px)',
  });

  const sendNextQuestion = () => {
    if (checkIfBoth === 1 || (checkIfBoth === 1 && isCreator)) {
      setCheckIfBoth(0);
      socket.emit('sendQuestion', { roomId }, data => {});
    } else {
      setCheckIfBoth(1);
    }
  };
  return (
    <>
      <div className={classes.questionBoard}>
        <Ball width="100" top="28%" left={'-3.8%'} />
        <Ball width="30" top="28%" left={'0'} bottom={0} margin="auto" />
        <Ball width="50" top="10%" right={'3%'} bottom={0} margin="auto" />
        <div className={end ? 'innerContainer' : ''}>
          {!end ? (
            <div className={classes.scoreBoard}>
              {isLaptop && (
                <div className={classes.cards}>
                  <span>{isCreator ? correctAnswer1 : correctAnswer2}</span>
                  <span>Correct answers</span>
                </div>
              )}
              <div className={classes.cards}>
                <span>{isCreator ? currentScore1 : currentScore2}</span>
                <span>Current score</span>
              </div>
              <div className={classes.cards + ' ' + 'mid'}>
                <CountDown
                  text="Points"
                  after={startAfter}
                  count={countUpRef}
                  key={'CountDown' + isCreator}
                  currentQuestion={0}
                  setCurrentQuestion={() => {
                    countUpRef.current.stop(countUpRef.current.getCount());
                    sendNextQuestion();
                  }}
                />
              </div>

              {!isLaptop && (
                <div className={classes.cards}>
                  <span>{isCreator ? correctAnswer1 : correctAnswer2}</span>
                  {/* {`${0}/${questions.length}`} */}
                  <span>Correct answers</span>
                </div>
              )}

              {isLaptop && (
                <div className={classes.cards}>
                  <Ball top="-15%" left="-7%" width={28} />
                  <span>{isCreator ? correctAnswer2 : correctAnswer1}</span>
                  <span>Player 2 correct answer</span>
                </div>
              )}

              {isLaptop && (
                <div className={classes.cards}>
                  <span>{isCreator ? currentScore2 : currentScore1}</span>
                  <span>Player 2 current score</span>
                </div>
              )}
            </div>
          ) : null}
          <div className={classes.details}>
            {startAfter || !question?.options ? (
              <Spinner />
            ) : end ? (
              <ResultContainer
                data={
                  currentScore1 > currentScore2
                    ? {
                        title: isCreator ? 'You Win' : 'You Lose',
                        class: isCreator ? 'win' : 'lose',
                        titleScore: isCreator ? currentScore1 : currentScore2,
                        opponentScore: isCreator
                          ? currentScore2
                          : currentScore1,
                        opponentText: isCreator
                          ? 'Player 2 score'
                          : 'Player 1 score',
                      }
                    : {
                        title: isCreator ? 'You Lose' : 'You Win',
                        class: isCreator ? 'lose' : 'win',
                        titleScore: isCreator ? currentScore1 : currentScore2,
                        opponentScore: isCreator
                          ? currentScore2
                          : currentScore1,
                        opponentText: isCreator
                          ? 'Player 2 score'
                          : 'Player 1 score',
                      }
                }
                twoPlayer
              />
            ) : (
              <div className={classes.questionContainer}>
                <div className={classes.header}>
                  <div className={classes.sound}>
                    <img src={Sound} alt="" />

                    <div className="number">
                      <span className="first"> 0 </span>/<span>0 </span>
                    </div>
                  </div>
                  <div className={classes.questions}>
                    {question?.content?.question}
                  </div>
                </div>

                <div className={classes.options}>
                  {question?.options?.map((options, index) => {
                    return (
                      <QuizOption
                        disable={optionNum}
                        data={options}
                        index={index}
                        currentQuestion={question}
                        submit={answer => {
                          countUpRef.current.pause(
                            countUpRef.current.getCount()
                          );
                          submitAnswer(answer);
                        }}
                        setOptionNum={() => setOptionNum(true)}
                        key={options._id + index}
                        id={options._id}
                        categoryId={question.categoryId}
                      />
                    );
                  })}
                </div>
              </div>
            )}
          </div>
          {!end && (
            <div className={classes.bottomPart}>
              {!isLaptop && (
                <div className={classes.cards}>
                  <span>{isCreator ? correctAnswer2 : correctAnswer1}</span>
                  <span>Player 2 correct answer</span>
                </div>
              )}

              {!isLaptop && (
                <div className={classes.cards}>
                  <span>{isCreator ? currentScore2 : currentScore1}</span>
                  <span>Player 2 current score</span>
                </div>
              )}
            </div>
          )}

          {/* {!end && (
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
          )} */}
        </div>
      </div>
    </>
  );
};

export default GAME;
