import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = () => {
  const [incomingExpense, setIncomingExpense] = useState();
  const saveExpenseHandler = () => {
    return setIncomingExpense(props.onSaveExpense);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpense={saveExpenseHandler} />
    </div>
  );
};

export default NewExpense;
