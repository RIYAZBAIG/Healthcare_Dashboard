import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const PatientRecoveryChart = () => {
  // Dummy data for patient recovery
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"], // Months
    datasets: [
      {
        label: "Patients Recovered",
        data: [65, 59, 80, 81, 56, 55, 40], // Number of patients recovered
        backgroundColor: "#979797", // Bar color
        borderColor: "rgba(75, 192, 192, 1)", // Border color
        borderWidth: 1,
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
        text: "Patient Recovery Data (2023)",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Number of Patients",
        },
      },
      x: {
        title: {
          display: true,
          text: "Months",
        },
      },
    },
  };

  return (
    <div style={{ width: "600px", margin: "auto" }}>
      <h2>Patient Recovery Chart</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default PatientRecoveryChart;