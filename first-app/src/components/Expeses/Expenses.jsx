import React from "react";
import ExpenseItem from "./ExpenseItem/ExpenseItem";

function Expenses() {
  let expenses = [
    {
      id: "e001",
      title: "pot the plants",
      amount: 199,
      createdAt: new Date("Jan 21, 2022"),
    },
    {
      id: "e002",
      title: "renew car insurance",
      amount: 399,
      createdAt: new Date("Jul 2, 2023"),
    },
    {
      id: "e003",
      title: "buy the jeans",
      amount: 99,
      createdAt: new Date("Feb 10, 2023"),
    },
  ];

  return (
    <div className="container">
      <h2 className="text-center">My Expenses App</h2>
      <div className="row">
        {expenses.map((expense) => (
          <ExpenseItem key={expense.id} expense={expense} />
        ))}
      </div>
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
