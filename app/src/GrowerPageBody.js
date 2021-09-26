import React from "react";
import "./GrowerPageBody.css";
import { Card } from "antd";
import DashboardPlant from "./DashboardPlant";
import { PlusCircleOutlined } from "@ant-design/icons";

const { Meta } = Card;

function GrowerPageBody() {
  return (
    <div className="GrowerPageBody">
      <div className="GrowerPageBody__plantsList">
        <h1>Your Plants</h1>
        <hr />
        <DashboardPlant />
      </div>
      <div className="GrowerPageBody__actions">
        <h1>Actions</h1>
        <Card
          bordered={true}
          style={{ width: 200, height: 100, backgroundColor: "#7FDA47" }}
        >
          <div
            className="GrowerPageBodyActions__addPlantButton"
            style={{ color: "white" }}
          >
            <span className="addPlantButton__icon">
              <PlusCircleOutlined />
            </span>
            Add Plant
          </div>
        </Card>
        <Card
          bordered={true}
          style={{
            width: 200,
            height: 100,
            backgroundColor: "#FF6652",
          }}
        >
          <div
            className="GrowerPageBodyActions__addPlantButton"
            style={{ color: "white" }}
          >
            Weekly Payout: 10$
          </div>
        </Card>
      </div>
    </div>
  );
}

export default GrowerPageBody;
