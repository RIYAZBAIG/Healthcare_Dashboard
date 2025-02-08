import React from "react";
import "./App.css";
import PatientOverview from "./Components/PatientOverview";
import BedUsageChart from "./Components/BedUsageChart";
import VisitLineChart from "./Components/VisitLineChart";


function App() {
  return (
    <div className="dashboard-container">
      <h1>Healthcare Dashboard</h1>
      <div className="overview-section">
        <PatientOverview/>
      </div>
      <div className="charts-section">
        <BedUsageChart/>
        <VisitLineChart/>
      </div>
    </div>
  );
}

export default App;
