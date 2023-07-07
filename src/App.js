
import ExpenseItems from './components/Expence/ExpenseItems';
import { expenseData } from './data';
import './components/Expence/ExpenseItem.css'
import Card from './components/UI/Card';
const App = ()=> {
  const newExpenceData=expenseData;
  return (
    <Card className='expence'>
   {newExpenceData.map((exdata)=>(
    <ExpenseItems expenceObj={exdata} key={exdata.id}  />
  ))}
    
    </Card>
  );
}

export default App;
