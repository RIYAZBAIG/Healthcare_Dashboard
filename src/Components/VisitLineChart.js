import React from "react";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip
} from "chart.js";
import { Line } from "react-chartjs-2";

// Register required elements
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip);

const VisitLineChart = () => {
  const data = {
    labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    datasets: [
      {
        label: "Patient Visits",
        data: [12, 19, 3, 5, 2, 3],
        borderColor: "#36A2EB",
        fill: false,
      },
    ],
  };

  return (
    <div className="chart-container">
      <h2>Patient Visits Over the Week</h2>
      <Line data={data} />
    </div>
  );
};

export default VisitLineChart;
