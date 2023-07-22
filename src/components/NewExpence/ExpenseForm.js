import { useState } from "react";
import "./ExpenseForm.css";
export function ExpenseForm() {
  const [title, setTitle] = useState("");

    function TitleHandel(e){
      setTitle(e.target.value)
      console.log(e.target.value)
    }

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Expense title</label>
          <input
            type="text"
            value={title}
            onChange={TitleHandel}
          />
        </div>
        <div className="new-expense__control">
          <label>Expense Amount</label>
          <input type="number" />
        </div>
        <div className="new-expense__control">
          <label>Expense Date</label>
          <input type="date" placeholder="Date" />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}
