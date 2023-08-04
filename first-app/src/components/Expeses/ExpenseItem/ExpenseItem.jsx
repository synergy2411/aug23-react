import ExpenseDate from "../ExpenseDate/ExpenseDate";

const ExpenseItem = ({ expense, deleteExpense }) => {
  return (
    <div className="col-4 mb-4">
      <div className="card">
        <div className="card-header">
          <h5 className="text-center">{expense.title.toUpperCase()}</h5>
        </div>
        <div className="card-body">
          <p>Amount : ${expense.amount}</p>
          <ExpenseDate createdAt={expense.createdAt} />
          <div className="float-end">
            <button
              className="btn btn-sm btn-outline-danger"
              onClick={() => deleteExpense(expense.id)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpenseItem;
