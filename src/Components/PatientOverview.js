import React from "react";
import "./PatientOverview.css";

function PatientOverview() {
  return (
    <div className="overview-card">
      <h2>Patient Overview</h2>
      <p>Total Patients: 1200</p>
      <p>Active Cases: 150</p>
      <p>Recovered: 950</p>
      <p>Critical: 10</p>
    </div>
  );
}

export default PatientOverview;
