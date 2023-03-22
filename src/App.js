import logo from "./logo.svg";
import "./App.css";
import ExpenseItem from "./Components/ExpenseItem";
import Expenses from "./Components/Expenses";
import NewExpense from "./Components/NewExpense/NewExpense";
import { useState } from "react";

let expenses = [
  {
    id: 1,
    title: "stocks",
    amount: 400,
    date: new Date(2021, 3, 5),
  },

  {
    id: 2,
    title: "appliances",
    amount: 500,
    date: new Date(2020, 3, 2),
  },

  {
    id: 3,
    title: "networking",
    amount: 200,
    date: new Date(2019, 3, 1),
  },
];

function App() {
  const [initialExpense, setInitialExpenses] = useState(expenses);
  const incomingExpenseHandler = (newExpense) => {
    setInitialExpenses((prevExpenses) => {
      return [newExpense, ...prevExpenses];
    });
  };

  console.log(expenses);

  return (
    <div className="App">
      <h2>Lettuce go</h2>
      <NewExpense onAddExpense={incomingExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
