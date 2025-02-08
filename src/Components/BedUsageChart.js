import React from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from "chart.js";
import { Pie } from "react-chartjs-2";

// Register required elements
ChartJS.register(ArcElement, Tooltip, Legend);

const BedUsageChart = () => {
  const data = {
    labels: ["Occupied Beds", "Available Beds"],
    datasets: [
      {
        label: "Bed Usage",
        data: [75, 25],
        backgroundColor: ["#FF6384", "#36A2EB"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB"],
      },
    ],
  };

  return (
    <div className="chart-container">
      <h2>Bed Usage</h2>
      <Pie data={data} />
    </div>
  );
};

export default BedUsageChart;
