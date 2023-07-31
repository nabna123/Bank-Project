// import React, { useState } from "react";

// const App = () => {
  const data = [
    {
      id: 1,
      text: "Does the customer pertain to retail banking?",
      answers: null,
      answer: true,
      isVisible: true,
    },
    {
      id: 2,
      text: "Are we reversing any income or charges booked earlier by the bank?",
      answers: null,
      answer: false,
      isVisible: false,
    },
    {
      id: 3,
      text: "Was there any deficiency/error on the part of the Bank's systems, process, or officials?",
      answers: null,
      answer: false,
      isVisible: false,
    },
    {
      id: 4,
      text: "Is the service gesture being booked against BO Advisory?",
      answers: null,
      answer: false,
      isVisible: false,
    },
    {
      id: 5,
      text: "Is the service gesture being booked for absorbing stamp paper cost related to SBLC (Stand By Letter of Credit) issuance against FCNR/NRI deposits?",
      answers: null,
      answer: false,
      isVisible: false,
    },
    {
      id: 6,
      text: "Is customer request obtained for compensation claimed?",
      answers: null,
      answer: true,
      isVisible: false,
    },
    
  ];
  export default data;
//   const [questions, setQuestion] = useState(data);
  
//     const handleAnswerChange = (index, selectedAnswer) => {
//     if (index >= 0 && index < questions.length) {
//       const question = questions[index];
//       console.log(question.answer, selectedAnswer);
//       if (question.answer === selectedAnswer) {
//         const updated = [...questions];
//         updated[index].answers = selectedAnswer;
//         if (updated[index + 1]) {
//           updated[index + 1].isVisible = true;
//         }
//         setQuestion(updated);
//       } else {
//         alert("Please Select Correct Answer");
//       }
//     }
//   };

//   return (
//     <div>
//       <h1>Questionnaire</h1>
//       {questions.map((question, index) => {
//         return (
//           <>
//             {question.isVisible && (
//               <div key={index}>
//                 <p>{question.text}</p>
//                 <label>
//                   <input
//                     type="radio"
//                     value="Yes"
//                     checked={question.answers}
//                     onChange={() => handleAnswerChange(index, true)}
//                   />
//                   Yes
//                 </label>
//                 <label>
//                   <input
//                     type="radio"
//                     checked={
//                       question.answers != null ? !question.answers : null
//                     }
//                     onChange={() => handleAnswerChange(index, false)} // Use question.id instead of index
//                   />
//                   No
//                 </label>
//               </div>
//             )}
//           </>
//         );
//       })}
//     </div>
//   );
// };

// export default App;
