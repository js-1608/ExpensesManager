import React, { useState } from 'react';


import Card from './Card';
import ExpensesFilter from './ExpenseFilter';
import './Expenses.css';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');
   // const[filterInfoText,setFilterInfoText]=useState('2019,2021,2022');


  // const filterChangeHandler = selectedYear => {
  //       props.onChangeFilter(event.target.value);
  // };
  const filterChangeHandler=selectedYear=>{
    setFilteredYear(selectedYear);
    // if(selectedYear==='2019')
    //     setFilterInfoText('2022,2021 &2022')
      
    //     else if(selectedYear==='2022')
    //     setFilterInfoText('2020,2021 &2023')
    //   else{
    //     setFilterInfoText('2020')
    //   }
  }

  const filteredExpenses=props.item.filter(expense=>{
    return expense.date.getFullYear().toString()===filteredYear;
  });

 

  return (
   
          <div>
<Card className='expenses'>

  <ExpensesFilter 
  selected={filteredYear}
   onChangeFilter={filterChangeHandler}
   />

{/* <p>{filterInfoText}</p> */}

<ExpensesChart expenses={filteredExpenses}></ExpensesChart>
<ExpensesList items={filteredExpenses}/>
    


    {/* <ExpensesItem 
        title={props.item[1].title} 
        amount={props.item[1].amount}
        date={props.item[1].date}
        ></ExpensesItem>
   
        <ExpensesItem 
        title={props.item[0].title} 
        amount={props.item[0].amount}
        date={props.item[0].date}
        ></ExpensesItem>
        <ExpensesItem 
        title={props.item[1].title} 
        amount={props.item[1].amount}
        date={props.item[1].date}
        ></ExpensesItem> */}
  
   </Card>
   </div>
  );
};

export default Expenses;