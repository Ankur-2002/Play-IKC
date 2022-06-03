// import React, { useContext, useState } from "react";
// import { Button, Form, Modal } from "react-bootstrap";
// import { AuthContext } from "context/auth/AuthContext";
// import { connect } from "react-redux";

// import { addMobileNumber, submitOTP } from "api/user";
// import { setUser } from "context/auth/AuthActions";

// const MyVerticallyCenteredModal = (props) => {
//   const { user, dispatch } = useContext(AuthContext);

//   const [mobileNo, setMobileNo] = useState(""); // sent in req to get otp
//   const [otp, setOtp] = useState(""); // it will be sent in the req to verify otp
//   const [otpSent, setOtpSent] = useState(false); // set after user clicked generate otp button
//   const [id, setId] = useState(""); // it will be sent in the req to verify otp

//   const [otpResend, setOtpResend] = useState(false);

//   const startTimer = () => {
//     let timer = 60;
//     let interval = setInterval(() => {
//       if (document.getElementById("otp-timer")) {
//         document.getElementById("otp-timer").innerHTML = timer--;
//       }
//       if (timer < 0) {
//         setOtpResend(true);
//         clearInterval(interval);
//       }
//     }, 1000);
//     console.log(timer);
//   };

//   const generateOtp = async () => {
//     setOtpResend(false);
//     startTimer();
//     setOtpSent(true);

//     await props
//       .addMobileNumber(mobileNo)
//       .then((user) => setId(user.payload._id))
//       .catch((error) => console.log(error));
//   };

//   function handleErrors(response) {
//     if (response.statusCode === 400) {
//       alert("Wrong OTP! Please Try Again ");
//       throw Error(response.error);
//     }
//     return response.data;
//   }

//   const onSubmitOtp = async () => {
//     try {
//       props
//         .submitOTP(id, otp)
//         .then(handleErrors)
//         .then((data) => {
//           localStorage.setItem("user", JSON.stringify(data.payload));
//           dispatch(setUser(data.payload.user));
//         })
//         .catch(function (error) {
//           console.log(error);
//         });
//       // const response = props.submitOTP(id, otp);
//       // if (handleErrors(response) === response.data) {
//       //   localStorage.setItem("user", JSON.stringify(response?.data?.payload));
//       //   dispatch(setUser(response?.data?.payload?.user));
//       //   props.onHide();
//       //   props.onCorrectOTP();
//       // }
//       // console.log(response);
//     } catch (error) {
//       console.log(error.message);
//     }
//   };

//   // .then(handleErrors)
//   // .then((data) => {
//   //   localStorage.setItem("user", JSON.stringify(data.payload));
//   //   dispatch(setUser(data.payload.user));
//   // })
//   // .catch(function (error) {
//   //   console.log(error);
//   // });
//   // };

//   // const onSubmitOtp = async () => {
//   //   props
//   //     .submitOTP(id, otp)
//   //     .then(handleErrors)
//   //     .then((data) => {
//   //       localStorage.setItem("user", JSON.stringify(data.payload));
//   //       dispatch(setUser(data.payload.user));
//   //     })
//   //     .catch(function (error) {
//   //       console.log(error);
//   //     });
//   // };

//   return (
//     <Modal
//       {...props}
//       size="lg"
//       aria-labelledby="contained-modal-title-vcenter"
//       centered
//     >
//       <Modal.Header style={{ alignSelf: "center" }}>
//         <Modal.Title id="contained-modal-title-vcenter" style={{}}>
//           <h3 style={{ textAlign: "center", color: "black" }}>
//             Mobile Number Verification
//           </h3>
//         </Modal.Title>
//       </Modal.Header>
//       <Modal.Body
//         style={{
//           textAlign: "center",
//         }}
//       >
//         {!otpSent && (
//           <>
//             {" "}
//             <Form style={{}}>
//               <Form.Group className="mb-3" controlId="formBasicEmail">
//                 <Form.Label
//                   style={{
//                     fontSize: "large",
//                     margin: "2rem",
//                   }}
//                 >
//                   Enter Phone Number
//                 </Form.Label>
//                 <Form.Control
//                   style={{
//                     width: "250px",
//                     margin: "auto",
//                     border: "none",
//                     borderBottom: "solid 3px midnightblue",
//                     boxShadow: "none",
//                     textAlign: "center",
//                     fontSize: "x-large",
//                     fontFamily: "monospace",
//                   }}
//                   type="phone"
//                   placeholder="Mobile Number"
//                   maxLength="10"
//                   value={mobileNo}
//                   onChange={(e) => setMobileNo(e.target.value)}
//                 />
//                 <Form.Text className="text-muted"></Form.Text>
//               </Form.Group>
//             </Form>
//             <Button
//               variant="warning"
//               style={{
//                 width: "250px",
//                 height: "4rem",
//                 margin: "2rem",
//                 borderRadius: "10px",
//                 fontSize: "small",
//                 fontWeight: "bolder",
//               }}
//               disabled={mobileNo.length !== 10}
//               onClick={generateOtp}
//             >
//               GENERATE OTP
//             </Button>
//           </>
//         )}

//         {/* ************************  *********    OTP page *************************************  */}

//         {otpSent && !user.user?.isVerified && (
//           <>
//             <Form style={{}}>
//               <Form.Group className="mb-3" controlId="formBasicEmail">
//                 <Form.Label>
//                   <h1
//                     style={{
//                       fontFamily: "paytone One",
//                       color: "midnightblue",
//                     }}
//                   >
//                     OTP Verification
//                   </h1>
//                   <p style={{ fontSize: "small" }}>
//                     An OTP has been sent to
//                     <br />
//                     <span style={{ fontWeight: "bold" }}> {mobileNo} </span>
//                   </p>
//                 </Form.Label>
//                 <Form.Control
//                   style={{
//                     width: "200px",
//                     margin: "auto",
//                     border: "none",
//                     borderBottom: "solid 3px midnightblue",
//                     boxShadow: "none",
//                     textAlign: "center",
//                     fontSize: "x-large",
//                     fontFamily: "monospace",
//                   }}
//                   type="text"
//                   placeholder="OTP"
//                   maxLength="4"
//                   value={otp}
//                   onChange={(e) => setOtp(e.target.value)}
//                 />
//                 <Form.Text className="text-muted"></Form.Text>
//               </Form.Group>
//             </Form>
//             <Button
//               variant="danger"
//               style={{
//                 margin: "1rem",
//                 width: "10rem",
//                 borderRadius: "10px",
//                 fontSize: "small",
//                 fontWeight: "bolder",
//               }}
//               onClick={generateOtp}
//               disabled={!otpResend}
//             >
//               RESEND OTP
//             </Button>
//             <Button
//               variant="warning"
//               style={{
//                 margin: "1rem",
//                 borderRadius: "10px",
//                 fontSize: "small",
//                 fontWeight: "bolder",
//               }}
//               disabled={otp.length !== 4}
//               onClick={onSubmitOtp}
//             >
//               SUBMIT OTP
//             </Button>
//             <div>
//               <p
//                 style={{
//                   fontSize: "small",
//                 }}
//               >
//                 resend otp in{" "}
//                 <span
//                   style={{ color: "black", fontWeight: "bolder" }}
//                   id="otp-timer"
//                 ></span>{" "}
//                 seconds
//               </p>
//             </div>
//           </>
//         )}

//         {/* ************************  ********* VERIFICATION SUCCESSFUL page *************************************  */}
//         {otpSent && user.user?.isVerified && (
//           <h1 style={{ textAlign: "center", fontFamily: "cursive" }}>
//             VERIFICATION SUCCESSFUL{" "}
//             <i style={{ color: "green" }} className="far fa-check-circle">
//               {" "}
//             </i>
//           </h1>
//         )}
//       </Modal.Body>
//       <Modal.Footer>
//         <Button
//           style={{
//             width: "6rem",
//             fontSize: "medium",
//           }}
//           onClick={props.onHide}
//         >
//           Close
//         </Button>
//       </Modal.Footer>
//     </Modal>
//   );
// };

// const mapDispatchToProps = {
//   addMobileNumber,
//   submitOTP,
// };

// export default connect(null, mapDispatchToProps)(MyVerticallyCenteredModal);
