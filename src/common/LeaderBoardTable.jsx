// import {
//   Avatar,
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableRow,
//   TableContainer,
//   Paper,
//   Typography,
// } from "@mui/material";
// import { styled } from "@mui/material/styles";
// import { tableCellClasses } from "@mui/material/TableCell";
// import { Box } from "@mui/system";

// const StyledTableCell = styled(TableCell)(({ theme }) => ({
//   [`&.${tableCellClasses.head}`]: {
//     backgroundColor: "#666",
//     color: theme.palette.common.white,
//     fontSize: 16,
//   },
//   [`&.${tableCellClasses.body}`]: {
//     fontSize: 14,
//   },
// }));

// const StyledTableRow = styled(TableRow)(({ theme }) => ({
//   "&:nth-of-type(odd)": {
//     backgroundColor: "#eee",
//   },
//   // hide last border
//   "&:last-child td, &:last-child th": {
//     border: 0,
//   },
// }));

// const LeaderBoardTable = ({ data }) => {
//   return (
//     data && (
//       <TableContainer component={Paper}>
//         <Table sx={{ minWidth: "300px" }} aria-label="customized table">
//           <TableHead>
//             <TableRow>
//               <StyledTableCell align="center">
//                 <div className="Leaderboard__header">Position</div>
//               </StyledTableCell>
//               <StyledTableCell>
//                 <div className="Leaderboard__header">Player Name</div>
//               </StyledTableCell>
//               <StyledTableCell align="center">
//                 <div className="Leaderboard__header">Plays</div>
//               </StyledTableCell>
//               <StyledTableCell align="center">
//                 <div className="Leaderboard__header">Points</div>
//               </StyledTableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {data?.map((leaderBoard, idx) => {
//               return (
//                 <StyledTableRow key={idx}>
//                   <StyledTableCell
//                     align="center"
//                     position={leaderBoard.position}
//                     sx={{
//                       color: leaderBoard.position < 11 ? "red" : "inherit", //? TODO: move this logic to STYLED COMPONENT
//                     }}
//                   >
//                     <div className="Leaderboard__header">
//                       {leaderBoard.position}
//                     </div>
//                   </StyledTableCell>
//                   <StyledTableCell
//                     sx={{
//                       color: leaderBoard.position < 11 ? "red" : "inherit", //? TODO: move this logic to STYLED COMPONENT
//                     }}
//                   >
//                     {/* <Box display={"flex"} alignItems={"center"}> */}
//                     {/* <Avatar
//                         alt={leaderBoard.playerName}
//                         src={leaderBoard.playerPic}
//                       /> */}
//                     <div className="Leaderboard__header">
//                       {leaderBoard.playerName}
//                     </div>
//                     {/* </Box> */}
//                   </StyledTableCell>

//                   <StyledTableCell
//                     align="center"
//                     sx={{
//                       color: leaderBoard.position < 11 ? "red" : "inherit", //? TODO: move this logic to STYLED COMPONENT
//                     }}
//                   >
//                     <div className="Leaderboard__header">
//                       {leaderBoard.plays}
//                     </div>
//                   </StyledTableCell>
//                   <StyledTableCell
//                     align="center"
//                     sx={{
//                       color: leaderBoard.position < 11 ? "red" : "inherit", //? TODO: move this logic to STYLED COMPONENT
//                     }}
//                   >
//                     <div className="Leaderboard__header">
//                       {leaderBoard.points}
//                     </div>
//                   </StyledTableCell>
//                 </StyledTableRow>
//               );
//             })}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     )
//   );
// };

// export default LeaderBoardTable;
