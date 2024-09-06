import React from "react";
import { Card, Col, Row } from "antd";
import "./CardsStyle.css";

const InProgress: React.FC = () => (
  <Col span={6}>
    <Card
      title="IN PROGRESS"
      bordered={false}
      className="custom-card-inprogress"
    >
      <div></div>
    </Card>
  </Col>
);

export default InProgress;
