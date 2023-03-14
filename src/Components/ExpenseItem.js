import React from "react";
import './ExpenseItem.css';
import ExpenseDate from "./ExpenseDate";
import Card from './Card';
//import Button from 'react-bootstrap/button';
import { useState } from "react";



export default function ExpenseItem(props) {

    const [currentTitle, setTitle] = useState(props.title);

    const submitHandler = () => {
        console.log("clicked");
        setTitle('Updated');

    }

    return <Card className="expense-item">
        <ExpenseDate date={props.date}/>
        <div className='expense-item__description'>
        <h2>{currentTitle}</h2>
        <h3 className="expense-item__price">{props.amount}</h3>
        </div>
        <button onClick={submitHandler }>Update Title</button>
    </Card>
}