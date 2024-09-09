import React, { useState } from "react";
import { FaTrash, FaEdit } from "react-icons/fa";
import Dropdown from "./Dropdown";
import { useFormData } from "@/app/contexts/FormDataContext";
import ModalForm from "../modal/ModalForm"; // Ensure this path is correct

// Define Task interface
interface Task {
  id: string;
  title: string;
  description: string;
  date: string;
  status: string;
  priority: string;
}

interface TaskProps {
  task: Task; // Use Task type for the task prop
}

const Task: React.FC<TaskProps> = ({ task }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility
  const [modalTask, setModalTask] = useState<Partial<Task> | null>(null); // State to manage the task being edited
  const { addTask, removeTask } = useFormData();

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const handleStatusChange = async (status: string) => {
    if (status !== task.status) {
      await removeTask(task.id); // Call removeTask with only taskId
      const updatedTask = { ...task, status };
      await addTask(updatedTask);
      setDropdownOpen(false);
    }
  };

  const handleDelete = async () => {
    await removeTask(task.id); // Call removeTask with only taskId
  };

  const getPriorityClasses = (priority: string) => {
    switch (priority) {
      case "High":
        return "text-red-600 bg-red-200";
      case "Medium":
        return "text-pink-600 bg-pink-200";
      case "Low":
        return "text-green-600 bg-green-200";
      default:
        return "text-gray-500 bg-gray-200"; // Fallback for missing priority
    }
  };

  const getStatusClasses = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-600";
      case "In Progress":
        return "bg-yellow-500";
      case "Todo":
        return "bg-purple-600";
      default:
        return "bg-gray-600"; // Fallback for missing status
    }
  };

  const priorityClasses = getPriorityClasses(task.priority);
  const statusBarClasses = getStatusClasses(task.status);

  const handleEdit = () => {
    setModalTask(task); // Set the task data to be edited
    setIsModalOpen(true); // Open the modal
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close the modal
    setModalTask(null); // Clear the task data
  };

  return (
    <div className="relative max-w-md mx-auto bg-white border border-black rounded-2xl overflow-visible mb-6">
      <div className="p-4">
        <div className="flex items-center">
          <p
            className={`text-xs font-normal rounded-md px-3 py-1 inline-block ${priorityClasses}`}
          >
            {task.priority || "No Priority"}
          </p>
        </div>
        <div className="relative flex items-center mt-2">
          <span
            className={`absolute left-0 top-0 h-full w-0.5 transform -translate-x-1 z-10 ${statusBarClasses}`}
          ></span>
          <h2 className="text-xl font-bold pl-2 pr-2 flex-1">
            {task.title || "Task Title"}
          </h2>
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="w-6 h-6 flex items-center justify-center border-none bg-transparent text-gray-800 font-black text-lg"
              aria-label="Toggle Dropdown"
            >
              &#9013;
            </button>

            {dropdownOpen && (
              <Dropdown
                onStatusChange={handleStatusChange}
                onDelete={handleDelete}
              />
            )}
          </div>
        </div>
        <p className="text-gray-500 font-normal leading-4 ml-2">
          {task.description || "No description provided"}
        </p>
        <hr className="my-4 border-gray-300" />
        <div className="flex justify-between items-center">
          <p className="text-gray-500 font-normal">
            📆 {task.date || "No date selected"}
          </p>
          <button
            onClick={handleEdit}
            className="text-blue-600 hover:text-blue-800 ml-32"
            aria-label="Edit Task"
          >
            <FaEdit size={16} />
          </button>
          <button
            onClick={handleDelete}
            className="text-red-600 hover:text-red-800"
            aria-label="Delete Task"
          >
            <FaTrash size={16} />
          </button>
        </div>
      </div>

      {/* Modal for editing task */}
      {isModalOpen && (
        <ModalForm closeModal={closeModal} initialTask={modalTask as Task} />
      )}
    </div>
  );
};

export default Task;
