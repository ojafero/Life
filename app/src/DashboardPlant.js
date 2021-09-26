import React from "react";
import { Card } from "antd";
import "./DashboardPlant.css";
import { Button } from "antd";

const { Meta } = Card;

function DashboardPlant() {
  return (
    <div className="DashboardPlant">
      <Card
        hoverable
        style={{ width: 350 }}
        cover={
          <img
            alt="example"
            src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/how-to-grow-corn-1528315419.jpg?crop=1.00xw:0.747xh;0,0.177xh&resize=1200:*"
          />
        }
      >
        {" "}
        <Meta title="Corn" className="DashboardPlant__title" />
        <div className="DashboardPlant__health">Status: Healthy</div>
        <div className="DashboardPlant__buttons">
          <Button type="primary">Preview</Button>
          <Button>Publish</Button>
        </div>
      </Card>
    </div>
  );
}

export default DashboardPlant;
