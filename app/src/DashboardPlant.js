import React from "react";
import { Card } from "antd";
import "./DashboardPlant.css";
import { Button } from "antd";

const { Meta } = Card;

function DashboardPlant({ title, status, imgUrl }) {
  return (
    <div className="DashboardPlant">
      <Card
        hoverable
        style={{ width: 350 }}
        cover={<img alt="example" src={imgUrl} height="300" />}
      >
        {" "}
        <Meta title={title} className="DashboardPlant__title" />
        <div className="DashboardPlant__health">Status: {status}</div>
        <div className="DashboardPlant__buttons">
          <Button type="primary">Preview</Button>
          <Button>Publish</Button>
        </div>
      </Card>
    </div>
  );
}

export default DashboardPlant;
