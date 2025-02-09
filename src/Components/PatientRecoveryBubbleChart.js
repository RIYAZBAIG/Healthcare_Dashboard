import React from "react";
import { Bubble } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(LinearScale, PointElement, Tooltip, Legend);

const PatientRecoveryBubbleChart = () => {
  // Dummy data for patient recovery
  const data = {
    datasets: [
      {
        label: "Patients Recovered",
        data: [
          { x: 20, y: 30, r: 15 }, // x: Age, y: Recovery Days, r: Number of Patients
          { x: 40, y: 10, r: 10 },
          { x: 30, y: 20, r: 20 },
          { x: 50, y: 40, r: 5 },
          { x: 60, y: 25, r: 25 },
        ],
        backgroundColor: "00008B", // Bubble color
        borderColor: "rgba(75, 192, 192, 1)", // Border color
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Patient Recovery Bubble Chart (2023)",
      },
    },
    scales: {
      x: {
        type: "linear",
        position: "bottom",
        title: {
          display: true,
          text: "Age of Patients",
        },
      },
      y: {
        title: {
          display: true,
          text: "Recovery Days",
        },
      },
    },
  };

  return (
    <div style={{ width: "600px", margin: "auto" }}>
      <h2>Patient Recovery Bubble Chart</h2>
      <Bubble data={data} options={options} />
    </div>
  );
};

export default PatientRecoveryBubbleChart;