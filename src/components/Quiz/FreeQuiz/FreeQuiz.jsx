import { Box, Button, Typography, Container } from '@mui/material';
import React, { useEffect, useState, useRef } from 'react';
import { useHistory } from 'react-router';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';

import singlePageBackground from '../../../assets/images/singlePageBackground.svg';
import singlePageBackgroundBlue from '../../../assets/images/singlePageBackgroundBlue.svg';
import { endQuiz } from 'api/quiz-single-player';
import { Spinner } from 'assets';
import QuizContainer from 'components/Quiz/SinglePlayerQuizContainer';
import CustomModal from 'common/CustomModal';
import KLogoRed from 'assets/images/k_logo_red.png';
import { startQuiz } from 'store/actions/quizAction';
import { useStyles } from './FreeQuiz.style';

function FreeQuiz({ dispatch, Quiz }) {
  const [quizData, setQuizData] = useState(null);
  let { quizId } = useParams();
  const history = useHistory();
  const classes = useStyles();
  // Passed to Quiz Container ARRAY INDEX
  const [questionIdx, setQuestionIdx] = useState(0);

  // QUESTIONS ARRAY
  const [questions, setQuestions] = useState([...Quiz.questions]);
  // RESULT ID
  const [resultId, setResultId] = useState();
  const [result, setResult] = useState(null);
  const [end, setEnded] = useState(false);
  useEffect(() => {
    dispatch(startQuiz(quizId));
  }, [quizId]);

  const handleQuizEnd = async () => {
    try {
      const response = await endQuiz(resultId);
      setResult(response?.data?.payload);
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

  return (
    <div className={classes.container}>
      <img
        src={singlePageBackground}
        className="front"
        alt="singlePageBackground"
      />
      <img
        src={singlePageBackgroundBlue}
        className="back"
        alt="singlePageBackgroundBlue"
      />

      {Quiz.questions?.length && questionIdx < Quiz.questions?.length ? (
        <>
          <QuizContainer
            completed={false}
            isFreebie={true}
            questions={Quiz.questions}
            setQuestionIdx={setQuestionIdx}
            question={Quiz.questions[questionIdx]}
            ResultId={Quiz.resultId}
            questionIdx={questionIdx}
            setNextQues={true}
            handleQuizEnd={handleQuizEnd}
            quizResult={result}
          />
        </>
      ) : null}
    </div>
  );
}

/** 
 * <div className={classes.questionBoard}>
        <div className={classes.header}>
          <img src={Sound} alt="" />
          <span>{'01 / 05'}</span>
          <img src={Hint} alt="" />
        </div>
        <div className={classes.question}></div>
        <div></div>
      </div>
 */
const mapStateToProps = state => {
  return {
    dispatch: state.dispatch,
    Quiz: state.Quiz,
  };
};

export default connect(mapStateToProps)(FreeQuiz);
/**
 *       <div style={{ display: 'flex', flexDirection: 'column' }}>
        {Quiz.questions?.length && questionIdx < Quiz.questions?.length ? (
          <>
            <QuizContainer
              completed={false}
              isFreebie={true}
              questions={Quiz.questions}
              setQuestionIdx={setQuestionIdx}
              question={Quiz.questions[questionIdx]}
              ResultId={Quiz.resultId}
              questionIdx={questionIdx}
              setNextQues={true}
              handleQuizEnd={handleQuizEnd}
              quizResult={result}
            />

            <div className="final__entry">
              <h2 className="final__entry__title">
                Final Entry:
                <span
                  style={{ color: 'var(--red)', fontFamily: 'Paytone One' }}
                >
                  60m 00s
                </span>
              </h2>
              <hr style={{ width: '80%', margin: ' 2% auto' }} />
              <div className="description__btns">
                <h4>Entry Fee: {quizData?.poolAmount} tokens</h4>
                <h4>
                  Prize Pool:
                  <img width="20px" src={KLogoRed} alt="K" />
                  25.00
                </h4>
                <h4>Questions: {quizData?.metadata?.maxQuestions}</h4>
                <h4>Global Plays:225</h4>
                <h4>Max Plays per Player: {quizData?.numberOfTimes}</h4>
                <h4>Free Plays: 7</h4>
              </div>
              <h3 className="game__text" style={{ color: 'var(--dark)' }}>
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
    
          {/* warning modal that will prevent user from quitting accidentally 
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
    
                <Box display="flex" justifyContent={'space-around'}>
                  <Button
                    variant="contained"
                    color="error"
                    sx={{
                      fontSize: '1.4rem',
                      textTransform: 'capitalize',
                    }}
                    onClick={() => history.push('/')}
                  >
                    Leave Quiz
                  </Button>
                  <Button
                    variant="contained"
                    color="success"
                    sx={{
                      fontSize: '1.4rem',
                      textTransform: 'capitalize',
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
                </Typography> *
    
                <Box display="flex" justifyContent={'space-around'}>
                  <Button
                    variant="contained"
                    color="error"
                    sx={{
                      fontSize: '1.4rem',
                      textTransform: 'capitalize',
                    }}
                    onClick={() => history.push('/quiz/fetch/classic')}
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
                  </Button> 
                </Box>
              </>
            }
          />
 */
