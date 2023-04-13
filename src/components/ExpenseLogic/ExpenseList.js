import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";

// conditional rendering logic

const ExpenseList = (props) => {

  // Conditional return statements: conditional rendering design pattern 

  // since filtered expenses is not available, we simply use props.items
  // and return our fallback code inside the IF statement
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">No expenses found.</h2>;
  }

  // otherwise we return the result of calling map on props.items,
  // rendering a <ExpenseItem /> for each expense in our props.items array
  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <ExpenseItem
          // key special prop added to allow React to keep track of expense items => required/recomended,
          // otherwise bugs/performance issues happen
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpenseList;
