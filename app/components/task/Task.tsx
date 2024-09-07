"use client"; // This line marks the file as a Client Component

import React, { useState } from "react";
import "tailwindcss/tailwind.css";
import Dropdown from "./Dropdown";

const Task: React.FC = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <div className="relative max-w-md mx-auto bg-white border border-black rounded-2xl overflow-visible mb-6">
      <div className="p-4">
        <div className="">
          <p className="text-xs font-normal bg-red-200 text-red-600  rounded-md px-3 py-1 inline-block">
            High
          </p>
          <div className="relative flex items-center mt-2">
            <span className="absolute left-0 top-0 h-full w-0.5 bg-purple-600 transform -translate-x-1 z-10"></span>
            <h2 className="text-xl font-bold pl-2 pr-2 flex-1">
              Brainstorming
            </h2>
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="w-6 h-6 flex items-center justify-center border-none bg-transparent text-gray-800 font-black text-lg"
                aria-label="Toggle Dropdown"
              >
                &#9013;
              </button>
              {dropdownOpen && <Dropdown />}
            </div>
          </div>
        </div>
        <p className="text-gray-500 font-normal leading-4 ml-2">
          Brainstorming brings team members diverse experience into play.
        </p>
        <hr className="my-4 border-gray-300" />

        <p className="text-start text-gray-500 font-normal"> 📆 18/09/2024</p>
      </div>
    </div>
  );
};

export default Task;
