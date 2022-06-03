// import { Container } from '@mui/material';
// import React, { useEffect, useState } from 'react';
// import { useHistory } from 'react-router';
// import Rough from './QuizContainer';

// function Game({ isCreator, socket, roomId, userId }) {
//   const history = useHistory();
//   const [hasSentFirstQuestion, setHasSentFirstQuestion] = useState(false);
//   const [question, setQuestion] = useState(null);
//   const [newQuestion, setNewQuestion] = useState(false);
//   const [quesId, setQuesId] = useState('');

//   const [questionsCorrect, setQuestionsCorrect] = useState(0);
//   const [secondPlayerQuestionsCorrect, setSecondPlayerQuestionsCorrect] =
//     useState(0);
//   const [score, setScore] = useState(0);
//   const [secondPlayerScore, setSecondPlayerScore] = useState(0);
//   const [shouldShowNext, setShouldShowNext] = useState(false);

//   useEffect(() => {
//     if (isCreator && !hasSentFirstQuestion) {
//       socket.emit('sendQuestion', { roomId: roomId }, async data => {
//         console.log('');
//       });

//       setHasSentFirstQuestion(true);
//     }

//     socket.on('answer', async response => {
//       console.log(response, 'Answer ');
//       if (response?.hasAnswered === 3) {
//         setShouldShowNext(true);
//         if (isCreator) {
//           setSecondPlayerQuestionsCorrect(secondPlayerQuestionsCorrect + 1);
//           setSecondPlayerScore(response?.player2?.score);
//         } else {
//           setSecondPlayerQuestionsCorrect(secondPlayerQuestionsCorrect + 1);
//           setSecondPlayerScore(response?.player1?.score);
//         }
//         return;
//       }
//       // hasAnswered == 1 == player one has answered , 2 == player two has answered , 3 == both has playwered
//       if (isCreator) {
//         if (response?.hasAnswered === 2 && response?.player2?.isCorrect === 1) {
//           setSecondPlayerQuestionsCorrect(secondPlayerQuestionsCorrect + 1);
//           setSecondPlayerScore(response?.player2?.score);
//         }
//       }

//       if (!isCreator) {
//         if (response?.hasAnswered === 1 && response?.player1?.isCorrect === 1) {
//           setSecondPlayerQuestionsCorrect(questionsCorrect + 1);
//           setSecondPlayerScore(response?.player1?.score);
//         }
//       }
//     });
//   }, []);

//   useEffect(() => {
//     socket.on('question', response => {
//       console.log(response, 'Question comming ');
//       setQuestion(response[0]);

//       if (question?._id !== quesId) {
//         setQuesId(question?._id);
//         setNewQuestion(true);
//       }
//     });
//   }, []);

//   const submitAnswerQuiz = async (questionId, answer, points) => {
//     socket.emit('submitAnswer', {
//       userId: userId,
//       roomId: roomId,
//       answer: answer,
//       questionId: questionId,
//       points: points,
//     });
//     socket.on('answer', response => {
//       if (!isCreator) {
//         if (response?.player2?.isCorrect === 1) {
//           setQuestionsCorrect(questionsCorrect + 1);
//         }

//         if (response?.player2?.score) {
//           setScore(response?.player2?.score);
//         }
//       }

//       if (isCreator) {
//         if (response?.player1?.isCorrect === 1) {
//           setQuestionsCorrect(questionsCorrect + 1);
//         }

//         if (response?.player1?.score) {
//           setScore(response.player1.score);
//         }
//       }
//     });
//   };

//   const sendNextQuestion = () => {
//     socket.emit('sendQuestion', { roomId: roomId }, data => {
//       console.log('Send Question');
//       console.log(data);
//     });
//   };

//   const handleDisconnect = () => {
//     history.push('/');
//     socket.emit('end', function () {
//       socket.disconnect(true);
//     });
//   };

//   return (
//     <>
//       <Container maxWidth="lg">
//         <Rough
//           shouldShowNext={shouldShowNext}
//           setShouldShowNext={val => setShouldShowNext(val)}
//           secondPlayerQuestionsCorrect={secondPlayerQuestionsCorrect}
//           secondPlayerScore={secondPlayerScore}
//           score={score}
//           questionsCorrect={questionsCorrect}
//           question={question}
//           setNextQues="false"
//           showLoader={newQuestion}
//           questions={10}
//           setNewQuestion={setNewQuestion}
//           isLive={true}
//           submitAnswerQuiz={(questionId, answer, points) =>
//             submitAnswerQuiz(questionId, answer, points)
//           }
//           sendNextQuestion={sendNextQuestion}
//           handleDisconnect={handleDisconnect}
//         />
//       </Container>
//     </>
//   );
// }

// export default Game;

// /**
//  *  * <div className="final__entry">
//           <h2 className="final__entry__title">
//             Final Entry:
//             <span style={{ color: 'var(--red)', fontFamily: 'Paytone One' }}>
//               60m 00s
//             </span>
//           </h2>
//           <hr style={{ width: '80%', margin: ' 2% auto' }} />
//           <div className="description__btns">
//             <h4>Entry Fee:0 tokens</h4>
//             <h4>Prize Pool:€0.00</h4>
//             <h4>Questions:10</h4>

//             <h4>Free Plays: Unlimited</h4>
//           </div>
//           <div className="final__entry__btns">
//             <button>View Prize Split</button>
//             <button>Share quiz</button>
//             <button
//               className="submmit"
//               variant="outlined"
//               onClick={handleDisconnect}
//             >
//               {' '}
//               Quit Game
//             </button>
//           </div>
//         </div> */
