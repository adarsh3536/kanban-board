import React from "react";
import { Row } from "antd";
import ToDo from "./ToDo";
import InProgress from "./InProgress";
import Completed from "./Completed";
import "./CardsStyle.css";

const Cards: React.FC = () => (
  <Row gutter={10} className="flex justify-center items-start custom-margin ">
    <ToDo />
    <InProgress />
    <Completed />
  </Row>
);

export default Cards;
