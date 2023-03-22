import React from "react";
import "./ExpenseFilter.css";
import { useState } from "react";

const ExpenseFilter = (props) => {
  const [date, setDate] = useState("");
  const dateSelectHandler = (event) => {
    setDate(event.target.value);
    console.log(date);
    props.onSaveDate(date);
  };
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label> Filter by year</label>
        <select value={props.selected} onChange={dateSelectHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
