// app/component/task/Dropdown.tsx

import { Card } from "antd";
import React from "react";
import "./Dropdown.css";

// Define props for the Dropdown component
interface DropdownProps {
  onStatusChange: (status: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ onStatusChange }) => {
  // Handle status selection
  const handleStatusChange = (status: string) => {
    onStatusChange(status);
  };

  return (
    <div className="absolute right-0 top-full mt-2 bg-white border border-gray-300 shadow-lg rounded-xl w-56 overflow-visible z-10 ">
      <Card
        title="Change Status"
        className="custom-dropdown-body custom-dropdown-color"
        // style={{ backgroundColor: "lightSkyBlue" }}
      ></Card>
      <div className="p-2">
        <div className="space-y-2">
          <div>
            <button
              className="w-full text-left py-1 hover:bg-gray-100 focus:outline-none pl-4"
              onClick={() => handleStatusChange("Todo")}
            >
              Todo
            </button>
            <hr className="border-t border-gray-300" />
          </div>
          <div>
            <button
              className="w-full text-left py-1 hover:bg-gray-100 focus:outline-none pl-4"
              onClick={() => handleStatusChange("In Progress")}
            >
              In Progress
            </button>
            <hr className="border-t border-gray-300" />
          </div>
          <div>
            <button
              className="w-full text-left py-1 hover:bg-gray-100 focus:outline-none pl-4"
              onClick={() => handleStatusChange("Completed")}
            >
              Completed
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
