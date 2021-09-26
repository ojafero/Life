import React from "react";
import "./GrowerPageBody.css";
import { Card } from "antd";
import DashboardPlant from "./DashboardPlant";
import { PlusCircleOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Meta } = Card;

function GrowerPageBody() {
  return (
    <div className="GrowerPageBody">
      <div className="GrowerPageBody__plantsList">
        <h1>Your Plants</h1>
        <hr />
        <DashboardPlant
          title="Apple"
          status="healthy"
          imgUrl="https://firebasestorage.googleapis.com/v0/b/shellhacks-f8271.appspot.com/o/AppleHealthy.png?alt=media&token=ea5b0a99-f3c1-4de2-9d4d-c6eac23932f2"
        />
        <DashboardPlant
          title="Cherry"
          status="Might have a potential disease of Powdery Mildew"
          imgUrl="https://firebasestorage.googleapis.com/v0/b/shellhacks-f8271.appspot.com/o/cherryMildew.png?alt=media&token=90e47c77-0006-481a-b2d1-3a548a4e2434"
        />
      </div>
      <div className="GrowerPageBody__actions">
        <h1>Actions</h1>
        <Link to="/growerAddPlant">
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
        </Link>
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
