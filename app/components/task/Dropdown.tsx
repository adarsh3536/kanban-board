import { Card } from "antd";
import React from "react";
import "./Dropdown.css";

// React.FC - Define the Dropdown component as a functional component
const Dropdown: React.FC = () => {
  return (
    <div className="absolute right-0 top-full mt-2 bg-white border border-gray-300 shadow-lg rounded-xl w-56 overflow-visible z-10 ">
      <Card
        title="Change Status"
        className="custom-dropdown-body	custom-dropdown-color"
      ></Card>
      <div className="p-2">
        <div className="space-y-2">
          <div>
            <button className="w-full text-left py-1 hover:bg-gray-100 focus:outline-none pl-4">
              Todo
            </button>
            <hr className="border-t border-gray-300" />
          </div>
          <div>
            <button className="w-full text-left py-1 hover:bg-gray-100 focus:outline-none pl-4">
              In Progress
            </button>
            <hr className="border-t border-gray-300" />
          </div>
          <div>
            <button className="w-full text-left py-1 hover:bg-gray-100 focus:outline-none pl-4">
              Completed
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
