import logo from './logo.svg';
import './App.css';
import ExpenseItem from './Components/ExpenseItem';
import Expenses from './Components/Expenses';
import NewExpense from './Components/NewExpense/NewExpense';

function App() {
let expenses = [
  {
    id: 1,
    title: 'stocks',
    amount: 400,
    date: new Date(2023, 3, 5),

  },

  {
    id: 2,
    title: 'appliances',
    amount: 500,
    date: new Date(2023, 3, 2),
  },

  {
    id: 3,
    title: 'networking',
    amount: 200,
    date: new Date(2023, 3, 1),
  }
]

  return (
    <div className="App">
      <h2>Lettuce go</h2>
      <NewExpense/>
     <Expenses expenses={expenses}/>
 
    </div>
  );
}

export default App;
