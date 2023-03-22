import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  const valueArray = props.Points.map((Points) => Points.value);
  const totalMaximum = Math.max(...valueArray);
  return (
    <div className="chart">
      {props.Points.map(() => {
        <ChartBar
          key={Points.label}
          value={Points.value}
          maxValue={totalMaximum}
          label={Points.label}
        />;
      })}
    </div>
  );
};

export default Chart;
