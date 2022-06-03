// import React from 'react';
// import Button from '@mui/material/Button';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';
// import IconButton from '@mui/material/IconButton';
// import CopyIcon from '@mui/icons-material/CopyAllOutlined';
// import { styled } from '@mui/material/styles';
// import Stack from '@mui/material/Stack';
// import { DialogTitleText, DialogContentCustomText } from './Styles';

// import '../PlayWithFriend.css';

// export default function AlertDialog({
//   open,
//   roomCode,
//   handleContinue,
//   handleClose,
// }) {
//   const ContinueButton = styled(Button)({
//     marginLeft: '8px',
//     '&:hover': {
//       backgroundColor: '#f2e46a',
//     },
//   });

//   return (
//     <div>
//       <Dialog
//         maxWidth="md"
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="alert-dialog-title"
//         aria-describedby="alert-dialog-description"
//       >
//         <div className="Dialog">
//           <DialogTitle>
//             <DialogTitleText>{'Share'}</DialogTitleText>
//           </DialogTitle>
//           <DialogContent>
//             <DialogContentText>
//               <DialogContentCustomText
//                 component="span"
//                 color="common.black"
//                 id="alert-dialog-description"
//               >
//                 Share this code with your friend to play together.
//                 <br />
//                 {roomCode === null ? 'Loading' : roomCode}
//                 <IconButton
//                   onClick={() =>
//                     navigator.clipboard.writeText(
//                       `Play a quiz with me. Here's the code: ${roomCode}`
//                     )
//                   }
//                 >
//                   <CopyIcon color="primary" size="large" />
//                 </IconButton>
//               </DialogContentCustomText>
//             </DialogContentText>
//             <Stack direction="row" spacing={2}></Stack>
//           </DialogContent>
//           <DialogActions>
//             <Button variant="contained" color="error" onClick={handleClose}>
//               Close
//             </Button>
//             <ContinueButton variant="contained" onClick={handleContinue}>
//               Continue
//             </ContinueButton>
//           </DialogActions>
//         </div>
//       </Dialog>
//     </div>
//   );
// }
