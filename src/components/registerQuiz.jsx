// import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
// import WarningRoundedIcon from "@mui/icons-material/WarningRounded";
// import React, { useEffect } from "react";
// import { Link, useHistory, useParams } from "react-router-dom";
// import { registerQuiz } from "api/quiz";
// import "./registerQuiz.css";
// import { connect } from "react-redux";

// function RegisterQuiz({ registerQuiz }) {
//   let { quizId } = useParams();
//   console.log(quizId);
//   let history = useHistory();

//   const goToPreviousPath = () => {
//     history.goBack();
//   };

//   useEffect(() => {
//     registerQuiz(quizId).then((response) => {
//       console.log(response);
//     });
//   }, [quizId, registerQuiz]);

//   return (
//     <div className="blurBackground">
//       <div className="registerContainer">
//         <div className="registerWrapper">
//           <div className="cancelRegister" onClick={goToPreviousPath}>
//             <ClearRoundedIcon fontSize="large" />
//           </div>
//           <div className="header">Registration Successful</div>
//           <div className="body">
//             <h4>
//               Thats's right, have a go on this quiz for free. It wont't cost you
//               any tokens. But your score will still count on the leaderboard and
//               you could still win a share of the cash prize! How cool is that!
//             </h4>
//             <br />
//             <h4>
//               By clicking Continue you are agreeing to PlayIKC's{" "}
//               <a
//                 style={{
//                   textDecoration: "none",
//                 }}
//                 href="!#"
//               >
//                 Terms and Conditions
//               </a>
//             </h4>

//             <button className="continueButtonFinal">
//               <Link
//                 style={{
//                   color: "var(--light)",
//                   fontFamily: "Paytone One",
//                   textDecoration: "none",
//                 }}
//                 to={`/playQuiz/classic/${quizId}`}
//               >
//                 Continue
//               </Link>
//             </button>
//           </div>

//           <div className="registerfooter">
//             <WarningRoundedIcon fontSize="medium" />
//             <h4>
//               <b>
//                 <span>WARNING!</span>{" "}
//               </b>
//               to ensure optimum performance of the quiz platform,{" "}
//               <b>
//                 <span className="bold">DO NOT</span>{" "}
//               </b>{" "}
//               have any other window tabs or software running in background{" "}
//             </h4>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// const mapDispatchToProps = {
//   registerQuiz,
// };

// export default connect(null, mapDispatchToProps)(RegisterQuiz);
