import React from "react";
import { Card, Col } from "antd";
import Task from "../task/Task";
import { useFormData } from "@/app/contexts/FormDataContext";

const Completed: React.FC = () => {
  const { tasks } = useFormData();

  return (
    <Col span={6}>
      <Card
        title="COMPLETED"
        bordered={false}
        className="custom-card-completed mb-16"
      >
        {tasks.Completed.length > 0 ? (
          tasks.Completed.map((task) => (
            <div key={task.id} className="sub-card">
              <Task task={task} />
            </div>
          ))
        ) : (
          <p>No tasks available</p>
        )}
      </Card>
    </Col>
  );
};

export default Completed;
