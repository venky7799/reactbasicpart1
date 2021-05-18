import { useState } from "react";
import Card from "./Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem(props) {
    // const expenseDate = new Date(2021, 5, 6);
    // const expenseTitle = "Car Insurance";
    // const expenseAmount = 294.67;
    // store in app js


    /*ExpenseDate */
    // const month =props.date.toLocaleString("en-US",{month:"long"});
    // const year = props.date.getFullYear();
    // const day = props.date.toLocaleString("en-US",{day:'2-digit'})
    const [state,setStatee]=useState(props.title);
    
    const funName=()=>{
        setStatee("updated!")
        console.log(state);
    }
    return (
        <Card className="expense-item">
            {/* <div>{props.date.toISOString()}</div> */}
            {/* ExpenseDate  */}

            {/* <div>{month}</div>
            <div>{year}</div>
            <div>{day}</div> */}

            <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
                <h2>{state}</h2> 
                <div className="expense-item__price">${props.amount}</div>
            </div>
            <button onClick={funName}>click</button>
        </Card>

    );
}

export default ExpenseItem;