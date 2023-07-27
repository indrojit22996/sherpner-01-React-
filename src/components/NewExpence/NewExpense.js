import './NewExpense.css'
import { ExpenseForm } from './ExpenseForm';
import { useState } from 'react';
export function NewExpense(props) {
  const [editExpence,setEditExpence]=useState(false)

function handelSaveExpenceData(userEnterdData){
  const saveUserData={
    ...userEnterdData,
    id:Math.random().toString()
  }
  props.onAddExpence(saveUserData)
  setEditExpence(false)
}

function startEditHandel(){
  setEditExpence(true)
}
function stopEditHandel(){
  setEditExpence(false)
}
  return <div className='new-expense'>
  {!editExpence && <button onClick={startEditHandel}>Add New Expence</button>}
  {editExpence &&  <ExpenseForm onSaveExpenceData={handelSaveExpenceData} onCancle={stopEditHandel}/>}
  </div>;
}
