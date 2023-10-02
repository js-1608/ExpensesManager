import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from './Card';


function ExpensesItem(props) {

    // const [title,setTitle]=useState(props.title);
    // const clickHandler =()=>
    // {
    //     setTitle('Updated!');
    //     // console.log(title);
    // }
    return (
        <li>
        <Card className="expense-item">
            {/* <div className='expense-item'>20 aug 2023</div> */}
            <div className="expense-item__description">
                {/* <p className='expense-item_description'> 
            { todaysDAte}</p> */}
                {/* <h2 className='expense-item' >Be A Bug for your code</h2> */}

                {/* appraoch 1 */}
                {/* <h2>{props.expense.title +" "+props.expense.amount }</h2>  */}


                {   //    THIS LINE WILL NOT WORK IF WE STORE
                    // EXPENSE=EXPESES[0] 
                }

                <ExpenseDate date={props.date} /> 
                <h2>{props.title}</h2>
                <h2 className='expense-item__price'>{props.amount}</h2>
                  {/* <div className="expense-item_price">2022-23
                </div> */}
            </div>
        </Card>
        </li>
    );
}
export default ExpensesItem;

