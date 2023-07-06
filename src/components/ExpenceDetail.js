function ExpenseDetail({obj}) {
  return (
    <div className="expense-item__description">
      <h1>{obj.title}</h1>
      <h2>{obj.LocationOfExpenditure}</h2>
      <div className="expense-item__price">{obj.amount}</div>
    </div>
  );
}
export default ExpenseDetail;
