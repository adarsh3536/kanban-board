import React from "react";
import { Card, Col, Row } from "antd";
import "./CardsStyle.css";
import Task from "../task/Task";

const InProgress: React.FC = () => (
  <Col span={6}>
    <Card
      title="IN PROGRESS"
      bordered={false}
      className="custom-card-inprogress"
    >
      <div>
        <Task />
      </div>
    </Card>
  </Col>
);

export default InProgress;
