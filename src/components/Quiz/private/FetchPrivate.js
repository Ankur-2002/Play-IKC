// import React, { useState, useEffect, useContext } from "react";
// import { USER_SERVER } from "config";
// import QuizCard from "../QuizCard";
// import axios from "axios";

// import { AuthContext } from "context/auth/AuthContext";

// function FetchPrivate(props) {
//   const { user } = useContext(AuthContext);

//   const [fetchQues, setfetchQues] = useState("");

//   useEffect(() => {
//     const fetchQuiz = async () => {
//       const config = {
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${user?.token}`,
//         },
//       };

//       const res = await axios.get(`${USER_SERVER}/quiz/${props.link}`, config);

//       setfetchQues(res.data.payload.quizzes);
//       // console.log(`${USER_SERVER}/quiz/${props.link}`);
//       // console.log(config);
//       // console.log(`Bearer ${user?.token}`);
//       // console.log(res.data.payload.quizzes);
//     };
//     fetchQuiz();
//   }, []);
//   return (
//     <div className="games__cards">
//       {fetchQues &&
//         fetchQues.map((item, idx) => {
//           return <QuizCard quizDetail={item} />;
//         })}
//     </div>
//   );
// }

// export default FetchPrivate;
