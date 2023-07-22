import ExpenseItems from "./components/Expence/ExpenseItems";
import { expenseData } from "./data";
import "./components/Expence/ExpenseItem.css";
import Card from "./components/UI/Card";
import { NewExpense } from "./components/NewExpence/NewExpense";
const App = () => {
  const newExpenceData = expenseData;
  return (
    <div>
      <NewExpense />
      <Card className="expence">
        {newExpenceData.map((exdata) => (
          <ExpenseItems expenceObj={exdata} key={exdata.id} />
        ))}
      </Card>
    </div>
  );
};

export default App;
