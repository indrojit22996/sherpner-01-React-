import './NewExpense.css'
import { ExpenseForm } from './ExpenseForm';
export function NewExpense(props) {

function handelSaveExpenceData(userEnterdData){
  const saveUserData={
    ...userEnterdData,
    id:Math.random().toString()
  }
  props.onAddExpence(saveUserData)
}

  return <div className='new-expense'>
  <ExpenseForm onSaveExpenceData={handelSaveExpenceData}/>
  </div>;
}
