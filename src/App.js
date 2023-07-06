
import ExpenseItems from './components/ExpenseItems';
import { expenseData } from './data';
function App() {
  const newExpenceData=expenseData;
  return (
    <div>
   {newExpenceData.map((exdata)=>(
    <ExpenseItems expenceObj={exdata} key={exdata.id}  />
  ))}
    
    </div>
  );
}

export default App;
