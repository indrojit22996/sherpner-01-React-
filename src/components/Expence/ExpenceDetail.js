import { useState } from "react";

function ExpenseDetail({obj}) {
  // const 

  const [title,setTitle]=useState(obj.title);
  const [expense ,setExpense ]=useState(obj.amount);
  // function handelDeleteExpense(){
  //   document.querySelector(".expense-item__description").remove();
  // }
  function updateExpense(){
    setExpense("$100")
  }

  function changeTitle(){
    setTitle("Updated!!!")
  }
  return (
    <div className="expense-item__description">
      <h1>{title}</h1>
      <h2>{obj.LocationOfExpenditure}</h2>
      <div className="expense-item__price">{expense}</div> 
      <button onClick={updateExpense}>Update Expense </button>
      {/*<button onClick={handelDeleteExpense}>Delete Expense</button>*/}
      <button onClick={changeTitle}>Change Title </button>
      </div>
  );
}
export default ExpenseDetail;
