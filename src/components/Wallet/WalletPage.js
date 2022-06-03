// import React, { useContext, useState } from "react";
// import { AuthContext } from "context/auth/AuthContext";
// import WalletTransactions from "./WalletTransactions";
// import CustomModal from "common/CustomModal";
// import { Button as MuiButton, TextField } from "@mui/material";
// import { Card, Button } from "react-bootstrap";
// import { connect } from "react-redux";

// import { payWithPaytm } from "api/quiz";

// import useStyles from "./WalletPage.styles";

// const WalletPage = ({ payWithPaytm }) => {
//   const classes = useStyles();
//   const { ikcAmount } = useContext(AuthContext);
//   const [amount, setAmount] = useState("1");
//   const [openIkcModal, setOpenIkcModal] = useState(false);

//   const handleCloseIkcModal = () => setOpenIkcModal(false);
//   const handleOpenIkcModal = () => setOpenIkcModal(true);

//   const handleIkcConfirm = async () => {
//     if (amount <= "0") return;

//     try {
//       const response = await payWithPaytm(amount);
//       handleCloseIkcModal();
//       setAmount("1");

//       // redirect to new tab
//       localStorage.setItem("pageData", response.payload);
//       window.open("#/paytm", "_blank");
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <>
//       <Card
//         style={{
//           margin: "auto",
//           marginTop: "3rem",
//           color: "black",
//           borderRadius: "47%",
//           background:
//             "repeating-radial-gradient(rgb(188 206 227), transparent 170px)",
//         }}
//       >
//         <Card.Body style={{ textAlign: "center" }}>
//           <Card.Title
//             style={{
//               fontSize: "x-large",
//               fontFamily: "Paytone One",
//               marginTop: "6rem",
//               fontWeight: "400",
//             }}
//           >
//             You have
//           </Card.Title>
//           <Card.Text
//             style={{
//               fontSize: "xxx-large",
//               fontFamily: "Paytone One",
//               color: "#1d3f82",
//               fontWeight: "bolder",
//               margin: "2rem",
//               marginTop: "5rem",
//               marginBottom: "5rem",
//             }}
//           >
//             {ikcAmount} <span>IKC</span>
//           </Card.Text>
//           <Button
//             variant="dark"
//             style={{
//               height: "4.5rem",
//               width: "15rem",
//               fontSize: "small",
//               borderRadius: "25px",
//               margin: "1rem",
//               color: "#ffb027",
//               fontWeight: "900",
//               marginBottom: "3rem",
//             }}
//             onClick={handleOpenIkcModal}
//           >
//             Add IKC
//           </Button>
//           <Button
//             variant="dark"
//             style={{
//               height: "4.5rem",
//               width: "15rem",
//               fontSize: "small",
//               borderRadius: "25px",
//               margin: "1rem",
//               color: "#ffb027",
//               fontWeight: "900",
//               marginBottom: "3rem",
//             }}
//           >
//             Redeem
//           </Button>
//         </Card.Body>
//       </Card>
//       <WalletTransactions />

//       {/* Modal for Ikc */}
//       <CustomModal
//         open={openIkcModal}
//         onClose={handleCloseIkcModal}
//         title="Enter IKC"
//         body={
//           <div className={classes.container}>
//             <TextField
//               value={amount}
//               onChange={(e) => setAmount(e.target.value)}
//               type="number"
//               min={1}
//               label="Amount"
//               variant="standard"
//               InputProps={{
//                 classes: {
//                   input: classes.resize,
//                 },
//               }}
//               InputLabelProps={{ style: { fontSize: "1.5rem" } }}
//               error={amount <= 0}
//             />
//             <div className={classes.buttonContainer}>
//               <MuiButton
//                 className={classes.button}
//                 variant="contained"
//                 color="inherit"
//                 onClick={handleCloseIkcModal}
//               >
//                 Cancel
//               </MuiButton>
//               <MuiButton
//                 className={classes.button}
//                 variant="contained"
//                 color="secondary"
//                 onClick={handleIkcConfirm}
//               >
//                 Confirm
//               </MuiButton>
//             </div>
//           </div>
//         }
//       />
//     </>
//   );
// };

// const mapDispatchToProps = {
//   payWithPaytm,
// };

// export default connect(null, mapDispatchToProps)(WalletPage);
