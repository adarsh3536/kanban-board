import React from "react";
import { Card, Col } from "antd";
import "./CardsStyle.css";
import Task from "../task/Task";
import { useFormData } from "@/app/contexts/FormDataContext";

const ToDo: React.FC = () => {
  const { tasks } = useFormData();

  return (
    <Col span={6}>
      <Card title="TODO" bordered={false} className="custom-card-todo mb-16">
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <div key={task.id} className="sub-card">
              <Task task={task} /> {/* Pass task data as prop */}
            </div>
          ))
        ) : (
          <p>No tasks available</p>
        )}
      </Card>
    </Col>
  );
};

export default ToDo;
