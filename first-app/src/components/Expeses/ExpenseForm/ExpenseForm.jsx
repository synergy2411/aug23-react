import { useState } from "react";
import { createPortal } from "react-dom";

import { v4 } from "uuid";
import "./ExpenseForm.css";

const ExpenseForm = ({ closeForm, addNewExpense, setShow }) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredCreatedAt, setEnteredCreatedAt] = useState("");

  const titleChangeHandler = (event) => setEnteredTitle(event.target.value);
  const amountChangeHandler = (e) => setEnteredAmount(e.target.value);
  const createdAtChangeHandler = (e) => setEnteredCreatedAt(e.target.value);

  const submitHandler = (event) => {
    event.preventDefault();
    let newExpense = {
      id: v4(),
      title: enteredTitle,
      amount: Number(enteredAmount),
      createdAt: new Date(enteredCreatedAt),
    };
    addNewExpense(newExpense);
  };

  return createPortal(
    <div className="backdrop">
      <div className="my-form">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center">Add Expense</h2>
            <form>
              {/* title */}
              <div className="form-group mb-4">
                <label htmlFor="title">Title :</label>
                <input
                  type="text"
                  className="form-control"
                  value={enteredTitle}
                  onChange={titleChangeHandler}
                />
              </div>
              {/* amount */}
              <div className="form-group mb-4">
                <label htmlFor="amount">Amount :</label>
                <input
                  type="number"
                  className="form-control"
                  value={enteredAmount}
                  onChange={amountChangeHandler}
                />
              </div>
              {/* date */}
              <div className="form-group mb-4">
                <label htmlFor="createdAt">Created At :</label>
                <input
                  type="date"
                  className="form-control"
                  min="2021-04-01"
                  max="2023-12-31"
                  value={enteredCreatedAt}
                  onChange={createdAtChangeHandler}
                />
              </div>
              {/* button */}
              <div className="form-group mb-4">
                <div className="row">
                  <div className="col-6">
                    <div className="d-grid">
                      <button
                        className="btn btn-primary"
                        onClick={submitHandler}
                      >
                        Add
                      </button>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="d-grid">
                      <button
                        className="btn btn-warning"
                        onClick={() => closeForm()}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("modal")
  );
};

export default ExpenseForm;
