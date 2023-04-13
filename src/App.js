// Root Component
import { useState } from "react";
import ExpenseDisplay from "./components/ExpenseLogic/ExpenseDisplay";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];


function App() {

  // initialise state with default value of DUMMY_EXPENSES
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
 
  // triggered whenever a new expense is added 
  const addExpenseHandler = expense => {
    // since we're updating state based on previous state, we use the anonymous function format within 
    // our state updating function. 
    // within the function, we then return the new expense state and then spread previous expenses/states
    // into a new array. 
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses]
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>

      {/* First custom component
          
          'items' attribute stores a reference to the array defined inside component function
          we then pass props.items in ExpenseDisplay.js, which contains logic for the <ExpenseDisplay component />
          call below. 
          
          passing props.items this way - (using the props object) - allows us to reference the expenses array data and,
          ultimately display it 

      */}
      <ExpenseDisplay items={expenses}/>
      


    </div>
  );
}

export default App;
