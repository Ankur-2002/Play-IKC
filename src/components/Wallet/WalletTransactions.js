// import React, { useContext, useEffect } from "react";
// import { ListGroup } from "react-bootstrap";
// import { QuizContext } from "context/quiz/QuizContext";
// import TransactionItem from "./TransactionItem";

// const WalletTransactions = () => {
//   const quizContext = useContext(QuizContext);
//   const { transactions, getWalletTransactionsAsync } = quizContext;

//   useEffect(() => {
//     getWalletTransactionsAsync();
//   }, []);

//   // console.log("****trnsactions******");
//   // console.log(transactions);

//   return (
//     <div style={{ margin: "auto", marginTop: "2rem" }}>
//       <ListGroup style={{ margin: "auto" }}>
//         <ListGroup.Item>
//           <div
//             style={{
//               fontSize: "medium",
//               margin: "0.5rem",
//               textAlign: "center",
//             }}
//           >
//             HISTORY
//           </div>
//         </ListGroup.Item>
//         {transactions !== null &&
//           transactions.map((t) => (
//             <TransactionItem key={transactions._id} t={t} />
//           ))}
//       </ListGroup>
//     </div>
//   );
// };

// export default WalletTransactions;
