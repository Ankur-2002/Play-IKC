// import React, { useContext, useEffect } from 'react';
// import { QuizContext } from 'context/quiz/QuizContext';
// import useStyles from '../CreateQuiz.styles';

// const SelectCategory = ({ value, onChange }) => {
//   const classes = useStyles();

//   const { categories, getCategoriesAsync } = useContext(QuizContext);

//   useEffect(() => {
//     getCategoriesAsync();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   return (
//     <select
//       required
//       defaultValue={value}
//       value={value}
//       className={classes.input}
//       id="quiz-category"
//       name="categoryId"
//       onChange={onChange}
//     >
//       <option value="">Select Category</option>
//       {categories &&
//         categories.map(c => (
//           <option key={c._id} value={`${c._id}`}>
//             {c.name}
//           </option>
//         ))}
//     </select>
//   );
// };

// export default SelectCategory;
