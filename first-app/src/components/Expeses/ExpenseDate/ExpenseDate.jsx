const ExpenseDate = ({ createdAt }) => {
  const month = createdAt.toLocaleString("en-US", { month: "long" });
  const day = createdAt.toLocaleString("en-US", { day: "numeric" });
  const year = createdAt.getFullYear();

  return (
    <p>
      Created At : {month} {day}, {year}
    </p>
  );
};

export default ExpenseDate;
