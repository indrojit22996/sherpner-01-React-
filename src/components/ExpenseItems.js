import './ExpenseItem.css';

function ExpenseItems({expenceObj}){
  return <div className='expense-item '>
  <div>{expenceObj.date.toISOString()}</div>
  <div className='expense-item__description'>
  <h1>{expenceObj.title}</h1>
  <h2>{expenceObj.LocationOfExpenditure}</h2>
  <div className='expense-item__price'>{expenceObj.amount}
  </div>

  </div>
  </div>
}
export default ExpenseItems;