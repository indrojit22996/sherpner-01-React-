import ExpenseItems from "./components/Expence/ExpenseItems";
import { expenseData } from "./data";
import "./components/Expence/ExpenseItem.css";
import Card from "./components/UI/Card";
import { NewExpense } from "./components/NewExpence/NewExpense";
import { useState } from "react";
import ExpensesFilter from './components/Expence/ExpensesFilter'
// let newExpenceData = expenseData;

const App = () => {

const[userData,setUserData]=useState(expenseData)

function handelExpenceData(expence){
  console.log('App.js');
  console.log(expence)
  setUserData([expence,...expenseData]);
  
}


   
  return (
    <div>
      <NewExpense onAddExpence={handelExpenceData} />
      <Card className="expence">
      <ExpensesFilter />
        {userData.map((exdata) => (
          <ExpenseItems expenceObj={exdata} key={exdata.id} />
        ))}
      </Card>
    </div>
  );
};

export default App;
