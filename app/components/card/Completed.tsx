import React from "react";
import { Card, Col, Row } from "antd";
import "./CardsStyle.css";

const Completed: React.FC = () => (
  <Col span={6}>
    <Card
      title="COMPLETED"
      bordered={false}
      className="custom-card-completed"
    ></Card>
  </Col>
);

export default Completed;
