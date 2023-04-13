/* Building out the calendar */
import "./ExpenseItem.css";

function ExpenseDate(props) {
  // CLEAN CODE TIP: save complex logic in local variables declared in function scope then
  // pass those variables into JSX expression curlies {}
  const day = props.date.toLocaleString("en-GB", { day: "2-digit" });
  const month = props.date.toLocaleString("en-GB", { month: "long" });
  const year = props.date.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__day">{day}</div>
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__month">{year}</div>
    </div>
  );
}

export default ExpenseDate;
