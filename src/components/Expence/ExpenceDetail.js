function ExpenseDetail({obj}) {
  // const 
  function handelDeleteExpense(){
    document.querySelector(".expense-item__description").remove();
  }
  return (
    <div className="expense-item__description">
      <h1>{obj.title}</h1>
      <h2>{obj.LocationOfExpenditure}</h2>
      <div className="expense-item__price">{obj.amount}</div> 
      <button onClick={handelDeleteExpense}>Delete Expense</button>
    </div>
  );
}
export default ExpenseDetail;
