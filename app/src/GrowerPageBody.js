import React from "react";
import "./GrowerPageBody.css";
import { Card } from "antd";
import DashboardPlant from "./DashboardPlant";

const { Meta } = Card;

function GrowerPageBody() {
  return (
    <div className="GrowerPageBody">
      <div className="GrowerPageBody__plantsList">
        <h1>Your Plants</h1>
        <hr />

        <DashboardPlant />
      </div>
    </div>
  );
}

export default GrowerPageBody;
