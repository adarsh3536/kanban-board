import React from "react";
import { Card, Col, Row, Space } from "antd";
import "./CardsStyle.css";
import SubCard from "../task/Task";

const ToDo: React.FC = () => (
  <Col span={6}>
    <Card title="TODO" bordered={false} className="custom-card-todo">
      <div className="sub-card">
        <SubCard />
      </div>
    </Card>
  </Col>
);

export default ToDo;
