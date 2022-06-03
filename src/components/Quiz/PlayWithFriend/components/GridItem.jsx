// import React from 'react';
// import { Box, Grid } from '@mui/material';

// const GridItem = ({ handleClickOpen, category }) => {
//   return (
//     <Grid
//       item
//       sx={{
//         cursor: 'pointer',
//         transition: 'all 0.4s ease-in-out',
//       }}
//       key={category._id}
//       xs={4}
//       md={3}
//       lg={2}
//       onClick={() => handleClickOpen(category)}
//     >
//       <Box
//         className="gridBox"
//         sx={{
//           backgroundColor: '#f1e35a',
//           padding: '16px',
//           borderRadius: '8px',
//           transition: 'all 0.3s ease-in-out',
//           '&:hover': {
//             transform: 'scale(1.1)',
//           },
//           '&:hover .gridImage': {
//             transform: 'scale(1.15)',
//           },
//         }}
//       >
//         <img className="gridImage" alt={category.name} src={category.icon} />
//       </Box>
//       <div className="gridText">{category.name}</div>
//     </Grid>
//   );
// };

// export default GridItem;
