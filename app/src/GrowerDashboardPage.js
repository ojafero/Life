import React from "react";
import "./DashboardGrowerPage.css";
import GrowerPageBody from "./GrowerPageBody";
import GrowerWelcomeMessage from "./GrowerWelcomeMessage";

function GrowerDashboardPage() {
  return (
    <div className="GrowerDashboardPage">
      <GrowerWelcomeMessage />
      <GrowerPageBody />
    </div>
  );
}

export default GrowerDashboardPage;
