function ExpenseDate({date}) {
  const month = date.toLocaleDateString("en-US", { month: "long" });
  const year = date.getFullYear();
  const day = date.toLocaleDateString("en-US", { day: "2-digit" });
  return (
    <div>
      <div>{month}</div>
      <div>{year}</div>
      <div>{day}</div>
    </div>
  );
}
export default ExpenseDate;
