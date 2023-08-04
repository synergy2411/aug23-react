const ExpenseFilter = ({ yearChangeHandler }) => {
  return (
    <select
      className="form-control"
      onChange={(e) => yearChangeHandler(e.target.value)}
    >
      <option value="2022">2022</option>
      <option value="2023">2023</option>
    </select>
  );
};

export default ExpenseFilter;
