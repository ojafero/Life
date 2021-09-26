import React from "react";
import "./DashboardGrowerPage.css";
import GrowerPageBody from "./GrowerPageBody";
import GrowerWelcomeMessage from "./GrowerWelcomeMessage";
import Header from "./Header";

function GrowerDashboardPage() {
  return (
    <div className="GrowerDashboardPage">
      <Header />
      <GrowerWelcomeMessage />
      <GrowerPageBody />
    </div>
  );
}

export default GrowerDashboardPage;
