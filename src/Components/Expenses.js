import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import Card from './Card';
import ExpenseFilter from "./ExpenseFilter";


export default function Expenses(props){
    return(
        <div>
<ExpenseFilter />
<Card className="expenses">
    <ExpenseItem title = {props.expenses[0].title} amount={props.expenses[0].amount} date= {props.expenses[0].date} />
      <ExpenseItem title = {props.expenses[1].title} amount={props.expenses[1].amount} date= {props.expenses[0].date}/>
      <ExpenseItem title = {props.expenses[2].title} amount={props.expenses[2].amount} date= {props.expenses[0].date} />


</Card>
</div>
    );
    
}