const ExpenseItem = ({ expense }) => {
  return (
    <div className="col-4">
      <div className="card">
        <div className="card-header">
          <h5 className="text-center">{expense.title.toUpperCase()}</h5>
        </div>
        <div className="card-body">
          <p>Amount : ${expense.amount}</p>
          <p>Created At : {expense.createdAt.toISOString()}</p>
        </div>
      </div>
    </div>
  );
};

export default ExpenseItem;
