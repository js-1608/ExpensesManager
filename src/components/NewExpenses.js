import "./NewExpenses.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";
const NewExpenses=(props)=>{
    const saveExpenseDataHandler=(enteredExpenseData)=>
        {
         const expenseData={
            ...enteredExpenseData,
            id:Math.random().toString()
         };
         props.onAddExpense(expenseData);
         setIsEditing(false);
        };
        const[IsEditing,setIsEditing]=useState(false);
        const startEditingHandler=()=>{
        setIsEditing(true)
        }
        const stopEditingHandler=()=>{
            setIsEditing(false);
        }
    return(
        <div className="new-expense">
           {!IsEditing && <button onClick={startEditingHandler}>ADD NEW EXPENSES</button>
}
            {IsEditing && ( <ExpenseForm onSaveExpenseData ={saveExpenseDataHandler}
           onCancel={stopEditingHandler} />)}
        </div>
    );
};

export default NewExpenses;