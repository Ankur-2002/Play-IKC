// import moment from 'moment';
// import React from 'react';
// import { Link } from 'react-router-dom';
// import './QuizCard.css';
// import KPlayCrown from 'assets/images/k_play_crown.png';

// const getRedirectLink = (isFreebie, liveQuiz, id) => {
//   if (liveQuiz === false && isFreebie === false) {
//     return `/start/classic/${id}`;
//   }
//   if (liveQuiz === false && isFreebie === true) {
//     return `/start/free/${id}`;
//   }
//   if (liveQuiz === true && isFreebie === false) {
//     return `/start/live/${id}`;
//   }
//   return '';
// };

// function quizCard({ quizDetail }) {
//   let text;
//   let date;
//   // const showText =
//   //   moment.utc(quizDetail.lastDateToRegister) - Date.now() > 0
//   //     ? "Closes"
//   //     : "Registrations Close";

//   if (moment.utc(quizDetail.lastDateToRegister) - Date.now() > 0) {
//     text = 'Registrations Close';
//     date = moment
//       .utc(quizDetail.lastDateToRegister)
//       .format('Do MMMM YYYY,h:mm a');
//   } else if (
//     moment.utc(quizDetail.lastDateToRegister) - Date.now() < 0 &&
//     moment.utc(quizDetail.startDate) - Date.now() > 0
//   ) {
//     text = 'Quiz Closes in ';
//     date = moment.utc(quizDetail.endDate).format('Do MMMM YYYY,h:mm a');
//   } else if (
//     moment.utc(quizDetail.endDate) - Date.now() > 0 &&
//     moment.utc(quizDetail.startDate) - Date.now() < 0
//   ) {
//     text = 'Quiz ends';
//     date = moment.utc(quizDetail.endDate).format('Do MMMM YYYY,h:mm a');
//   } else {
//     text = 'Quiz ended!';
//     date = moment.utc(quizDetail.endDate).format('Do MMMM YYYY,h:mm a');
//   }

//   console.log(quizDetail);
//   console.log(moment.utc(quizDetail.lastDateToRegister) - Date.now());
//   return (
//     quizDetail && (
//       <Link
//         to={getRedirectLink(
//           quizDetail.isFreebie,
//           quizDetail.liveQuiz,
//           quizDetail._id
//         )}
//         style={{ textDecoration: 'none' }}
//       >
//         <div className="card" style={{ borderRadius: '7px' }}>
//           <div className="card__fix__block">
//             <div className="quiz__card__logo">
//               <div className="quiz__card__logo-wrapper">
//                 <img className="card__logo" src={KPlayCrown} alt="card" />
//               </div>
//             </div>
//             <div
//               style={{
//                 marginTop: '-20px',
//                 marginLeft: 'auto',
//                 marginRight: 'auto',
//               }}
//             >
//               <span className="span_logo">PlayIKC</span>
//               <span className="s_span "></span>
//             </div>
//           </div>

//           <h1 className="card__title">{quizDetail.title}</h1>

//           <div className="card__bottom">
//             {quizDetail.isFreebie && (
//               <h2 className="card__bottom__freetext">Play For Free!</h2>
//             )}

//             {!quizDetail.isFreebie && (
//               <div className="card__info">
//                 <span className="card__info-title">Assured Prize</span>
//                 <span className="card__info-value">
//                   {quizDetail.maxPrize}&nbsp;IKC
//                 </span>
//               </div>
//             )}
//             {/* <div className="card__info">
//               <span className="card__info-title">Players Registered</span>
//               <span className="card__info-value">
//                 {quizDetail.totalRegistrations}
//               </span>
//             </div> */}
//             {/* {!quizDetail.isFreebie && (
//               <div className="card__info">
//                 <span className="card__info-title">Tokens</span>
//                 <span className="card__info-value">
//                   {quizDetail.poolAmount}&nbsp;IKC
//                 </span>
//               </div>
//             )} */}
//             <h6 className="card__text">Special Prizes!</h6>
//             <span className="card__bottom__btn">
//               Play Now!{' '}
//               {!quizDetail.isFreebie && (
//                 <div className="card__bottom__btn__ikc">
//                   {/* <span className="card__info-title">Tokens</span> */}
//                   <span className="card__info-value-btn">
//                     {quizDetail.poolAmount}&nbsp;IKC
//                   </span>
//                 </div>
//               )}
//             </span>
//             <div className="card__info">
//               <span className="card__info-title">Players Registered</span>
//               <span className="card__info-value">
//                 {quizDetail.totalRegistrations}
//               </span>
//             </div>
//             <p className="card__closes">
//               {text}&nbsp;{date}
//             </p>
//           </div>
//         </div>
//       </Link>
//     )
//   );
// }
// export default quizCard;
