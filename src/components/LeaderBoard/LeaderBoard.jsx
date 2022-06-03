// import React, { useEffect, useState } from 'react';
// import { getLeaderboard } from 'api/quiz';
// import LeaderBoardTable from 'common/LeaderBoardTable';

// import { connect } from 'react-redux';
// import LeaderBoardPosition from './LeaderBoardPosition';

// const LeaderBoard = ({ id, getLeaderboard }) => {
//   const [leaderBoard, setLeaderBoard] = useState('');
//   useEffect(() => {
//     getLeaderboard(id)
//       .then(data => setLeaderBoard(data))
//       .catch(err => console.log(err));
//   }, [id, getLeaderboard]);

//   return (
//     <>
//       <div className="leaderboard__title">
//         <img
//           alt=""
//           src="https://www.quizando.com/assets/leaderboard_icon.png"
//         />
//         <h1 className="leaderboard__heading">Current Leaderboard</h1>
//       </div>
//       <div className="center">
//         <div className="top3">
//           {[1, 0, 2].map(
//             val =>
//               leaderBoard[val] && (
//                 <LeaderBoardPosition
//                   key={val}
//                   position={val + 1}
//                   playerName={leaderBoard[val]?.playerName}
//                   points={leaderBoard[val]?.points}
//                 />
//               )
//           )}
//         </div>
//       </div>
//       <LeaderBoardTable data={leaderBoard} />
//     </>
//   );
// };

// const mapDispatchToProps = {
//   getLeaderboard,
// };

// export default connect(null, mapDispatchToProps)(LeaderBoard);
