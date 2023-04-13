import { useState } from "react";
import "./ExpenseForm.css";

// here we structure an HTML form using JSX
// we return the form element as root
// inside we have a wrapper <div> element, within which we nest another <div> wrapper for each form <input> and <button>
// we include labels/inputs for the form elements themselves. input types set to their respective semantic contexts.

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const expenseChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    // prevent default form submission
    event.preventDefault();

    // collecting all the initial values defined in our hooks above into a single object
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    // executes onSaveExpenseData function, assigned as a special prop within <ExpenseForm /> function call in NewExpense.js ->
    // lifting the state up from ExpenseForm to NewExpense
    props.onSaveExpenseData(expenseData);

    // resetting input fields after submsission
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    // onSubmit event handler using the forms built in submit event
    // we pass the value attribute a reference to our initial/update state values
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={expenseChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
        <div>
          <button type="submit">Add Expense</button>
          <button type="button" onClick={props.onCancel}>Cancel</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
