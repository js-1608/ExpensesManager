
import { useState } from 'react';
import './Expenseform.css';


const ExpenseForm = (props) => {

    // UE USE stATE ONLY ONCE AND PASS THE OBJECT
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // });

    // const titleChangeHandler = (event) => {
    //     // setEnteredTitle(event.target.value);
    //     setUserInput({
    //         enteredTitle: event.target.value,
    //         ...userInput,
    //         enteredTitle:event.target.value
    //     })
    // };

    // const amountChangeHandler = (event) => {
    //     setEnteredAmount(event.target.value);
    //     setUserInput({
    //         enteredAmount: event.target.value,
    //         ...userInput,
    //         enteredAmount:event.target.value
    //     })

    //  BETTER APPRAOCH 

        const[enteredTitle,setEnteredTitle]=useState('');
        const[enteredAmount,setEnteredAmount]=useState('');
        const[enteredDate,setEnteredDate]=useState('');

    // const titleChangeHandler = (event) => {
    //     setEnteredTitle(event.target.value);
    // };
    // const amountChangeHandler = (event) => {
    //         setEnteredAmount(event.target.value);        
    // };
    // const dateChangeHandler = (event) => {
    //     setEnteredate(event.target.value);
    // };

    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // });

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        // setUserInput({
        //     enteredTitle: event.target.value,
        //     ...userInput,
        //     enteredTitle:event.target.value
        // })
        // another way
        // setUserInput((prevState) => {
        //     return { ...prevState, enteredTitle: event.target.value };
        // });
    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);

        // setUserInput((prevState) => {
        //     return { ...prevState, enteredAmount: event.target.value };
        // });
    };
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);

        // setUserInput((prevState) => {
        //     return { ...prevState, enteredDate: event.target.value };
        // });
    };

    // alternative approach to set input from user
    // const inputChangeHandler=(identifier,value)=>{
    //     if(identifier==='title')
    //     {
    //         setEnterTitle(value);
    //     }else if(identifier==='date')
    //     {
    //         setEnterDate(value);
    //     }else{
    //         setEnterAmount(value);
    //     }

    // }
const submitHandler=(event)=>{
    event.preventDefault();
    const expenseData={
        title: enteredTitle,
        amount :+enteredAmount,
        date: new Date(enteredDate)
    };
props.onSaveExpenseData(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
};

    return (
        <form className='form' onSubmit={submitHandler}>
            <div className="new-expense__controls">

                <div className="new-expense__control label">
                    <label>Title</label>
                    <input type="text" 
                    value={enteredTitle}
                    onChange={titleChangeHandler} />
                    {/* alternative approach use to set input from user */}

                    {/* <input type="text" onChange={(event)=>inputChangeHandler('title',event.target.value)} /> */}

                
                </div>

                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min='1' step='0.01' 
                    value={enteredAmount}
                    onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control input">
                    <label>Date</label>
                    <input type="date" min='2019-01-01' max='2025-12-31' 
                    value={enteredDate}
                    onChange={dateChangeHandler} />
                </div>
            </div>

            <div className="new-expense__actions">
                <button type='button' onClick={props.onCancel}> cancel</button>
                <button type="submit">Add Expeses</button>
            </div>
        </form>
    );

}

export default ExpenseForm;