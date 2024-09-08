import React from "react";
import { Card, Col } from "antd";
import "./CardsStyle.css";
import Task from "../task/Task";

const ToDo: React.FC = () => (
  <Col span={6}>
    <Card title="TODO" bordered={false} className="custom-card-todo mb-16">
      <div className="sub-card">
        <Task />
      </div>
    </Card>
  </Col>
);

export default ToDo;
