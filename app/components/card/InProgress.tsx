import React from "react";
import { Card, Col } from "antd";
import Task from "../task/Task";
import { useFormData } from "@/app/contexts/FormDataContext";

const InProgress: React.FC = () => {
  const { tasks } = useFormData();

  return (
    <Col span={6}>
      <Card
        title="IN PROGRESS"
        bordered={false}
        className="custom-card-inprogress mb-16"
      >
        {tasks["In Progress"].length > 0 ? (
          tasks["In Progress"].map((task) => (
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

export default InProgress;
