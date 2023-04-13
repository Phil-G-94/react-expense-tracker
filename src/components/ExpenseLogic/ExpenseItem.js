import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  return (
    
    // wrapping our ExpenseItem JSX in <li> to improve semantics, given its call in ExpenseList.js is
    // wrapped in <ul>
    <li>
      {/*Utilising our custom wrapper component */}
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">£{props.amount}</div>
        </div>
      </Card>
    </li>
  );
}

export default ExpenseItem;
