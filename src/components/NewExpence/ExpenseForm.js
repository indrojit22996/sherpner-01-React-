import { useState } from "react";
import "./ExpenseForm.css";
export function ExpenseForm(props) {
  const [enteredtitle, Setenteredtitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  function AmountHandel(e) {
    setEnteredAmount(e.target.value);
    // console.log(e.target.value);
  }
  function DateHandel(e) {
    setEnteredDate(e.target.value);
    // console.log(e.target.value);
  }

  function TitleHandel(e) {
    Setenteredtitle(e.target.value);
    // console.log(e.target.value);
  }
function submitHandeler(event){
  event.preventDefault();
  const userExpenceData={
    title:enteredtitle,
    amount:enteredAmount,
    date: new Date(enteredDate),
  }
  props.onSaveExpenceData(userExpenceData)
  setEnteredAmount('')
  Setenteredtitle('');
  setEnteredDate('')
}
  return (
    <form onSubmit={submitHandeler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Expense title</label>
          <input type="text" value={enteredtitle} onChange={TitleHandel} />
        </div>
        <div className="new-expense__control">
          <label>Expense Amount</label>
          <input type="number" value={enteredAmount} onChange={AmountHandel} />
        </div>
        <div className="new-expense__control">
          <label>Expense Date</label>
          <input
            type="date"
            placeholder="Date"
            value={enteredDate}
            onChange={DateHandel}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}
