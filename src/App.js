import React from "react";
import "./App.css";
import PatientOverview from "./Components/PatientOverview";
import BedUsageChart from "./Components/BedUsageChart";
import VisitLineChart from "./Components/VisitLineChart";
import PatientRecoveryChart from "./Components/PatientRecoveryChart";
import PatientRecoveryBubbleChart from "./Components/PatientRecoveryBubbleChart";
import FetchData from "./Components/FetchData";
import TodoList from "./Components/TodoList";
import Counter from "./Components/Counter";


function App() {
  return (
    <div className="dashboard-container">
      <h1>Healthcare Dashboard</h1>
      <div className="overview-section">
        <PatientOverview />
      </div>
      <div className="charts-section">
        <BedUsageChart />
        <VisitLineChart />
      </div>
      <div className="charts-section">
        <PatientRecoveryChart />
        <PatientRecoveryBubbleChart />
      </div>
      <TodoList />
      <Counter />
      <FetchData />
    </div>
  );
}
export default App;
