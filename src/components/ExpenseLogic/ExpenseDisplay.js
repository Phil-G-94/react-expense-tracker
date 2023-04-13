
import "./ExpenseDisplay.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpenseChart";
import { useState } from "react";

function ExpenseDisplay(props) {
  // take the user selected year state received from ExpenseFilter.js and store it
  const [filteredYear, setFilteredYear] = useState("2019");

  // updates filteredYear state with the selected year
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  // filters expenses by year
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });



  return (
    <div>
      <Card className="expenses">
        
        {/* 
            selected prop establishes two-way binding, back to the ExpenseFilter component 

            onChangeFilter special prop for pushing data up from ExpenseFilter component so
            that it can be used in ExpenseDisplay.

        */}

        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />

        {/* We pass in our filteredExpenses array as the value of our expenses prop in <ExpenseChart />*/}
        <ExpenseChart expenses={filteredExpenses} />
        
        <ExpenseList items={filteredExpenses}/>

      </Card>
    </div>
  );
}

export default ExpenseDisplay;

/* to be used in App.js */
