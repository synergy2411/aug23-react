import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem/ExpenseItem";
import ExpenseForm from "./ExpenseForm/ExpenseForm";

function Expenses() {
  let [show, setShow] = useState(false);

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
      <h2 className="text-center mb-4">My Expenses App</h2>
      <div className="row mb-4">
        <div className="col-4 offset-4">
          <div className="d-grid">
            <button className="btn btn-dark" onClick={() => setShow(!show)}>
              {show ? "Hide" : "Show"}
            </button>
          </div>
        </div>
      </div>
      {show && <ExpenseForm />}
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
