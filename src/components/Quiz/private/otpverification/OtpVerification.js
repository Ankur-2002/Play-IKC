// import React, { useState, Fragment } from "react";
// import { useHistory } from "react-router";
// import { Button } from "react-bootstrap";

// import MyVerticallyCenteredModal from "./OtpModal";

// const OtpVerification = (props) => {
//   const quizId = props.location.state.quizId;
//   const history = useHistory();
//   const [modalShow, setModalShow] = useState(false);

//   const onCorrectOTP = () => {
//     history.push(`/playQuiz/classic/confirm/${quizId}`);
//   };

//   return (
//     <>
//       <div
//         style={{
//           textAlign: "center",
//           margin: "6rem",
//           fontSize: "x-large",
//         }}
//       >
//         <h4
//           style={{
//             textAlign: "center",
//             margin: "6rem",
//             fontSize: "x-large",
//           }}
//         >
//           In Order to Play the Classic Games You have to verify Your Phone
//           Number
//         </h4>
//       </div>
//       <div
//         style={{
//           textAlign: "center",
//           margin: "5rem",
//         }}
//       >
//         <Button
//           style={{
//             textAlign: "center",
//             margin: "5rem",
//             width: "10rem",
//             fontSize: "19px",
//             borderRadius: "15px",
//           }}
//           variant="primary"
//           onClick={() => setModalShow(true)}
//         >
//           Verify
//         </Button>

//         <MyVerticallyCenteredModal
//           show={modalShow}
//           onHide={() => setModalShow(false)}
//           onCorrectOTP={onCorrectOTP}
//         />
//       </div>
//     </>
//   );
// };
// export default OtpVerification;
