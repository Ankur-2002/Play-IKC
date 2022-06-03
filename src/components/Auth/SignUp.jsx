// import {
//   Button,
//   createTheme,
//   FormControl,
//   FormControlLabel,
//   Grid,
//   Radio,
//   RadioGroup,
//   TextField,
//   ThemeProvider,
//   Typography,
// } from "@mui/material";
// import { React, useContext, useState } from "react";
// import FacebookLogin from "react-facebook-login";
// import GoogleLogin from "react-google-login";
// import { useHistory } from "react-router";
// import { Link } from "react-router-dom";
// import {
//   loginCall,
//   socialLogInFacebook,
//   socialLogInGoogle,
//   // signupUser,
// } from "api/auth";
// import { AuthContext } from "context/auth/AuthContext";
// import "./LogIn.css";
// import { connect } from "react-redux";

// const theme = createTheme({
//   palette: {
//     facebook: {
//       main: "var(--darkblue)",
//     },
//     google: {
//       main: "var(--light)",
//     },
//     twitter: {
//       main: "var(--sblue)",
//     },
//     ASKGAMBLERS: {
//       main: "var(--sred)",
//     },
//     button_color: {
//       main: "var(--ored)",
//     },
//   },
// });

// // function SignUp({ signupUser }) {
// function SignUp() {
//   const { isFetching, dispatch, error } = useContext(AuthContext);
//   const [field, setField] = useState({});
//   const history = useHistory();

//   const responseGoogle = async (response) => {
//     // console.log(response?.accessToken);
//     handleSocialGoogle(response);
//   };
//   const responseFacebook = async (response) => {
//     console.log(response);
//     handleSocialFacebook(response);
//   };

//   const handleSocialGoogle = async (response) => {
//     // console.log(response);
//     socialLogInGoogle(response, dispatch);
//     if (!isFetching) {
//       history.push("/quiz/fetch/classic");
//     } else {
//       alert("error");
//     }
//   };
//   const handleSocialFacebook = async (response) => {
//     // console.log(response);
//     socialLogInFacebook(response, dispatch);
//     if (!isFetching) {
//       history.push("/quiz/fetch/classic");
//     } else {
//       alert("error");
//     }
//   };
//   const handleSubmit = async (e) => {
//     const response = await signupUser(field);

//     console.log(response);

//     if (response.data.statusCode === 201) {
//       await loginCall(
//         {
//           username: field.username,
//           password: field.password,
//         },
//         dispatch
//       );
//       if (!isFetching && !error) {
//         history.push("/quiz/fetch/classic");
//       } else {
//         alert("error");
//       }
//     }
//   };

//   const handleOnChange = (e) => {
//     const name = e.target.name;
//     setField((prev) => ({
//       ...prev,
//       [name]: e.target.value,
//     }));
//   };

//   return (
//     <div className="signupContainer">
//       <div className="signupWrapper">
//         <div className="header__wrapper">
//           <div className="heading_signup">
//             <h2 className="header__title">
//               <span style={{ fontFamily: "Paytone One" }}>
//                 Sign up to PlayIKC
//               </span>
//             </h2>
//           </div>
//         </div>

//         <div className="SignupInput">
//           <div>
//             <Typography variant="h5">
//               Already a PlayIKC player?{" "}
//               <Link
//                 style={{ color: "var(--red)" }}
//                 className="anchor"
//                 to="/login"
//               >
//                 Login
//               </Link>{" "}
//               to start playing!
//             </Typography>
//             <hr />
//             {/* <Typography variant="h5">
//               Sign up to PlayIKC with your social media account or fill in the
//               details below
//             </Typography> */}
//           </div>
//           <div className="outbuttonContainer">
//             <GoogleLogin
//               clientId="898050232496-r9ar5u3iv276pkj5umqjgfr1b789apvg.apps.googleusercontent.com"
//               buttonText="Login"
//               render={(renderProps) => (
//                 <button
//                   onClick={renderProps.onClick}
//                   disabled={renderProps.disabled}
//                   className="my-google-button-class"
//                 >
//                   <i className="fa fa-google"></i>
//                   Login in with Google
//                 </button>
//               )}
//               onSuccess={responseGoogle}
//               onFailure={responseGoogle}
//               cookiePolicy={"single_host_origin"}
//               cssClass="my-google-button-class"
//             />
//             {/* <FacebookLogin
//               appId="418496103198279"
//               callback={responseFacebook}
//               cssClass="my-facebook-button-class"
//               icon="fa-facebook"
//             /> */}
//           </div>
//           <Grid
//             container
//             rowSpacing={1}
//             columnSpacing={{ xs: 1, sm: 2, md: 3 }}
//           >
//             {[
//               {
//                 displayName: "First Name",
//                 Name: "firstName",
//                 type: "text",
//               },
//               {
//                 displayName: "Last Name",
//                 Name: "lastName",
//                 type: "text",
//               },
//               {
//                 displayName: " Username",
//                 Name: "username",
//                 type: "text",
//               },
//               {
//                 displayName: "Email",
//                 Name: "email",
//                 type: "text",
//               },
//               {
//                 displayName: "Password",
//                 Name: "password",
//                 type: "password",
//               },
//               {
//                 displayName: "Confirm Password",
//                 Name: "s",
//                 type: "password",
//               },
//             ].map((item, val) => {
//               return (
//                 <Grid item xs={6}>
//                   <TextField
//                     id="outlined-basic"
//                     label={item.displayName}
//                     fullWidth
//                     name={item.Name}
//                     onChange={handleOnChange}
//                     variant="outlined"
//                     key={val}
//                     type={item.type}
//                   />
//                 </Grid>
//               );
//             })}
//           </Grid>
//           <FormControl component="fieldset">
//             <RadioGroup
//               row
//               aria-label="gender"
//               name="gender"
//               onChange={handleOnChange}
//               required
//             >
//               <FormControlLabel
//                 value="female"
//                 control={<Radio />}
//                 label="Female"
//               />
//               <FormControlLabel value="male" control={<Radio />} label="Male" />
//               <FormControlLabel
//                 value="other"
//                 control={<Radio />}
//                 label="Other"
//               />
//               <FormControlLabel
//                 value="nil"
//                 control={<Radio />}
//                 label="Prefer not to say"
//               />
//             </RadioGroup>
//           </FormControl>
//           <ThemeProvider theme={theme}>
//             <Button
//               className="signin__button"
//               fullWidth
//               variant="contained"
//               color="button_color"
//               onClick={handleSubmit}
//             >
//               Sign Up
//             </Button>
//           </ThemeProvider>

//           <Typography> 
//             By signing up, you agree to PlayIKC's <span>Privacy Policy</span> &{" "}
//             <span>Terms & Conditions.</span>
//           </Typography>
//         </div>
//       </div>
//     </div>
//   );
// }

// const mapDispatchToProps = {
//   signupUser,
// };

// export default connect(null, mapDispatchToProps)(SignUp);
