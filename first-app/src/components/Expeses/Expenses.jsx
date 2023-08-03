import React from "react";

function Expenses() {
  let expense = {
    id: "e001",
    title: "pot the plants",
    amount: 199,
    createdAt: new Date("Jan 21, 2023"),
  };

  return (
    <div className="container">
      <h2 className="text-center">Expenses coming soon...</h2>
    </div>
  );
}

export default Expenses;

// class Expenses extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h2>Class based component.</h2>
//             </div>
//         )
//     }
// }

// export default Expenses;
