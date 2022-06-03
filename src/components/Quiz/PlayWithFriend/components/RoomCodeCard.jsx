// import React from "react";
// import Stack from "@mui/material/Stack";
// import Typography from "@mui/material/Typography";
// import IconButton from "@mui/material/IconButton";
// import CopyIcon from "@mui/icons-material/CopyAllOutlined";

// const RoomCodeCard = ({ roomDetails }) => {
//   return (
//     <Stack alignItems="center" direction="column">
//       <Typography fontWeight="900" color="white" variant="h3" component="h3">
//         Room Code
//       </Typography>
//       <Stack alignItems="center" direction="row">
//         <Typography variant="h4" component="h4">
//           {roomDetails.roomCode !== null ? roomDetails.roomCode : null}
//         </Typography>
//         <IconButton
//           onClick={() =>
//             navigator.clipboard.writeText(
//               `Play a quiz with me. Here's the code: ${roomDetails.roomCode}`
//             )
//           }
//         >
//           <CopyIcon color="yellow" fontSize="large" />
//         </IconButton>
//       </Stack>
//     </Stack>
//   );
// };

// export default RoomCodeCard;
