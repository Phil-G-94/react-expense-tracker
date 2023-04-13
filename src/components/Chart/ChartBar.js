// Adding Dynamic Styles...

import "./ChartBar.css";

const ChartBar = (props) => {
 

  let barFillHeight = "0%";

  // yields a percentage value, representing how far the bar should be filled, rounding to nearest integer
  // + '%' since we'll be working this into a string
  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        
        {/* style attribute dynamically sets CSS styles; expects CSS rules in JS object format*/}
        
        <div 
          className="chart-bar__fill" 
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
};

export default ChartBar;
