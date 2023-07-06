import ExpenseDate from "./ExpenceDate";
import ExpenseDetail from "./ExpenceDetail";
import "./ExpenseItem.css";


function ExpenseItems({ expenceObj }) {
 
  return (
    <div className="expense-item ">
    <ExpenseDate date={expenceObj.date}  />
      <ExpenseDetail obj={expenceObj} />
    </div>
  );
}
export default ExpenseItems;
