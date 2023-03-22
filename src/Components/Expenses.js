import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "./Card";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";
import ExpensesChart from "./ExpensesChart";

export default function Expenses(props) {
  const [date, setDate] = useState("2020");
  const filterDate = props.expenses.filter((expenseItem) => {
    return String(expenseItem.date.getFullYear()) === date;
  });

  const saveDateHandler = (dateReturned) => {
    setDate(dateReturned);
    console.log("Within expenses");
    console.log(dateReturned);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter selected={date} onSaveDate={saveDateHandler} />
        {filterDate.map((expenseObject) => (
          <ExpenseItem
            key={Math.random()}
            title={expenseObject.title}
            amount={expenseObject.amount}
            date={expenseObject.date}
          />
        ))}

        {/*  <ExpensesChart expenses={none} />*/}
      </Card>
    </div>
  );
}
