import { useState } from "react";
const ExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = useState("");
  //

  const titleChangeHandler = (event) => setEnteredTitle(event.target.value);

  const submitHandler = (event) => {
    event.preventDefault();
    console.log("Title : ", enteredTitle);
  };

  return (
    <div className="row">
      <div className="offset-3 col-6">
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
              {/* date */}
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
                      <button className="btn btn-warning">Cancel</button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpenseForm;
