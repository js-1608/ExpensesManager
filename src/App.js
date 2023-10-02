// import logo from './logo.svg';
 import './App.css';
import Card from './components/Card';
// import ExpensesItem from './components/ExpensesItem';
import NewExpenses from './components/NewExpenses';
import Expenses from './components/Expenses';
import { useState } from 'react';
const DUMMY_EXPENSES = [
  {
    id:'e1',
    title: 'car insurance',
    amount: 250,
    date : new Date(2020,11,21)
  },
  {
    id:'e2',
    title: 'car insurance2',
    amount: 255,
    date :new Date(2021,12,7)
  }, {
    id:'e3',
    title: 'car insurance3',
    amount: 250,
    date :new Date(2022,10,7)
  }
];


function App() {
const[expenses,setexpenses]=useState(DUMMY_EXPENSES);


  const addExpenseHandler=(expense)=>{

    // setexpenses([expense,...newexpenses])
    // console.log(expense);

    setexpenses((prevExpenses)=>{
      return [expense,...prevExpenses];
    });
  }
  return (
    <Card className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        
        {/* approach 1  */}
        {/* <ExpensesItem expense={expenses[0]}> </ExpensesItem> */}
        
        {/* appraoch 2 
        this is better for begginer */}
      <NewExpenses onAddExpense={addExpenseHandler}></NewExpenses>
      <Expenses item={expenses}/>
      </header>
    </Card>
    
    
  );
}

export default App;
