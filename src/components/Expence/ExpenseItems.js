import ExpenseDate from "./ExpenceDate";
import ExpenseDetail from "./ExpenceDetail";
import Card from "../UI/Card";
import "./ExpenseItem.css";


function ExpenseItems({ expenceObj }) {
 
  return (
    <Card className="expense-item ">
    <ExpenseDate date={expenceObj.date}  />
      <ExpenseDetail obj={expenceObj} />
    </Card>
  );
}
export default ExpenseItems;
