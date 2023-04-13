// Component responsible for passing in the data points

import Chart from "../Chart/Chart";


const ExpensesChart = props => {
  // we expect every data point to be an object, representative of each month

  const chartDataPoints = [
    { label: 'Jan', value: 0 },
    { label: 'Feb', value: 0 },
    { label: 'Mar', value: 0 },
    { label: 'Apr', value: 0 },
    { label: 'May', value: 0 },
    { label: 'Jun', value: 0 },
    { label: 'Jul', value: 0 },
    { label: 'Aug', value: 0 },
    { label: 'Sep', value: 0 },
    { label: 'Oct', value: 0 },
    { label: 'Nov', value: 0 },
    { label: 'Dec', value: 0 } 
  ];

  for (const expense of props.expenses) {
    const expenseMonth = expense.date.getMonth(); // zero-indexed, "Jan" is [0]

    // updates the value of each array object to the sum of all expense amounts
    chartDataPoints[expenseMonth].value += expense.amount;
  }

  return <Chart dataPoints={chartDataPoints} />
}

export default ExpensesChart;