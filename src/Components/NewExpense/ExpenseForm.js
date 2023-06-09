import React from "react";
import { useState } from "react";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState(Date);
  const [newExpense, setNewExpense] = useState({});
  const [showForm, setShowForm] = useState(false);

  const saveExpenseHandler = () => {
    setNewExpense({
      title: enteredTitle,
      amount: enteredAmount,
      date: enteredDate,
    });
  };

  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value);
  };
  const amountChangeHandler = (e) => {
    setEnteredAmount(e.target.value);
  };
  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value);
  };

  const showFormHandler = () => {
    setShowForm(true);
  };

  const showCancelHandler = () => {
    setShowForm(false);
  };

  return (
    <div>
      {showForm ? (
        <form onClick={saveExpenseHandler}>
          <div className="new-expense__controls">
            <div className="new-expense__control">
              <label> Title </label>
              <input type="text" onChange={titleChangeHandler} />
            </div>
            <div className="new-expense__control">
              <label> Amount </label>
              <input
                type="number"
                min="0.01"
                step="0.01"
                onChange={amountChangeHandler}
              />
            </div>

            <div className="new-expense__control">
              <label> Date </label>
              <input
                type="date"
                min="2019-01-01"
                max="2022-12-31"
                onChange={dateChangeHandler}
              />
            </div>
          </div>
          <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
            <button onClick={showCancelHandler}>Cancel</button>
          </div>
        </form>
      ) : (
        <div className="new-expense__actions">
          <button type="submit" onClick={showFormHandler}>
            Add Expense
          </button>
        </div>
      )}
    </div>
  );
};

export default ExpenseForm;
