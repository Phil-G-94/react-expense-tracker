import ChartBar from "./ChartBar";

import "./Chart.css";

const Chart = (props) => {
  // to find the maximum value that should be represented in the chart,
  // we want to have a look at all the months and find the biggest value across all months

  // map through the dataPoints array we've passed down as props in our <Chart /> component call in ExpenseChart.js
  // transforms dataPoints objects to numbers, the number stored in dataPoint.value
  // dataPointValues will be an array of these dataPoint.value(s)
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);

  // Math.max() requires comma separated numbers
  // we use the spread operator to spread all of the array values in as comma-separated arguments
  const totalMaximum = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {/* we expect props.dataPoints to be an array, hence 
    we call .map() on it - returning a <ChartBar /> component for each dataPoint in this array 
    
    Within the <ChartBar /> component call, we declare a value attribute assigned a value of dataPoint.value
    this means we expect every dataPoint to contain a .value property. This requires that in ChartBar.js, we actually
    read this property and do something with it...

    We want to make sure that every chart bar plots the value in relation to the maximum value in the 
    entire chart, so we pass in a maxValue property set to the total maximum value present in our charts

    we set a label (to represent months in a year)

    and a unique key so React correctly & efficiently renders the list items in the component
    */}
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
          key={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
