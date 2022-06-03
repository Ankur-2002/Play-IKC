// import React from "react";
// import { Container, Box, Stack, Typography } from "@mui/material";
// import { TomatoButton } from "./Styles.js";
// import PlayerCard from "./PlayerCard.jsx";
// import RoomCodeCard from "./RoomCodeCard.jsx";

// const GameInfo = ({
//   category,
//   friend,
//   user,
//   roomDetails,
//   isCreator,
//   switchContent,
// }) => {
//   return (
//     <Container
//       maxWidth="xl"
//       sx={{
//         width: "100vw",
//         backgroundColor: "orange",
//         padding: "50px 0 200px 0",
//       }}
//     >
//       <Stack alignItems="center">
//         <Box
//           sx={{
//             backgroundColor: "orange",
//             marginTop: "24px",
//             border: "3px dashed yellow",
//             padding: "12px",
//             borderRadius: "8px",
//           }}
//         >
//           <RoomCodeCard roomDetails={roomDetails} />
//         </Box>
//         {category ? (
//           <div className="category__details">
//             <Typography
//               sx={{ marginRight: "16px", fontWeight: "700" }}
//               component="h4"
//               variant="h4"
//             >
//               {category.name}
//             </Typography>
//             <img width="50px" src={category?.icon} alt={category.name} />
//           </div>
//         ) : (
//           <></>
//         )}
//         <div id="GameInfo__Container">
//           <div className="GameInfo__Item" style={{ "--d": "0s" }}>
//             <PlayerCard name={`${user?.user?.firstName}`} isPresent={true} />
//           </div>
//           <div className="GameInfo__Item" style={{ "--d": "-2s" }}>
//             <PlayerCard
//               name={friend ? friend.split(" ")[0] : ""}
//               isPresent={friend !== "" ? true : false}
//             />
//           </div>
//         </div>
//         {/* <Stack sx={{ margin: "32px 0" }} alignItems="center" direction="row">
//           <PlayerCard name={`${user.user.firstName} ${user.user.lastName}`} />
//           <Box sx={{ margin: "0 60px" }}>
//             <Typography
//               fontWeight="900"
//               color="white"
//               variant="h3"
//               component="h3"
//             >
//               VS
//             </Typography>
//           </Box>
//           <PlayerCard name={friend} />
//         </Stack> */}
//         {isCreator ? (
//           <TomatoButton disabled={!isCreator} onClick={switchContent}>
//             Start Quiz
//           </TomatoButton>
//         ) : (
//           <Typography component="h4" variant="h4">
//             Waiting for friend to start quiz.
//           </Typography>
//         )}
//       </Stack>
//     </Container>
//   );
// };

// export default GameInfo;
