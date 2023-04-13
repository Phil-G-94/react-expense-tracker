import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  // event handler function for our onSaveExpenseDate prop
  const saveExpenseData = (enteredExpenseData) => {
    // receives the expenseData object from NewExpense child component, ExpenseForm.js
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    // passes above data up to App.js by passing in expenseData to our special prop function,
    // defined on <NewExpense /> component call in App.js

    props.onAddExpense(expenseData);
    stopEditingHandler();
  };

  return (
    <div className="new-expense">
      {/* To begin passing data from ExpenseForm.js to App.js, we first add an attribute in our <ExpenseForm /> component
          call 
          
          Once we've defined the handler function, see saveExpenseData above, we pass a reference to it within our prop. 
      */}

      {/* 
      
        conditionally rendering <ExpenseForm /> component 
        if isEditing === false, we render the single button 
        if isEditing === true, we render a new expense form component.

        to cancel, we set isEditing to false using the stopEditingHandler.
        
      
      */}

      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseData}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
