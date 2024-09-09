import React, { useEffect } from "react";
import { useFormData } from "@/app/contexts/FormDataContext";

// Define Task interface
interface Task {
  id: string;
  title: string;
  description: string;
  date: string;
  status: string;
  priority: string;
}

interface ModalFormProps {
  closeModal: () => void;
  initialTask?: Task | null; // Optional task data for editing
}

const ModalForm: React.FC<ModalFormProps> = ({ closeModal, initialTask }) => {
  const { formData, setFormData, addTask, updateTask } = useFormData();

  useEffect(() => {
    if (initialTask) {
      // Populate form data if initialTask is provided
      setFormData({
        ...initialTask,
        id: initialTask.id, // Ensure ID is set correctly
      });
    } else {
      // Clear form data if no initialTask is provided
      setFormData({
        title: "",
        description: "",
        date: "",
        status: "",
        priority: "",
      });
    }
  }, [initialTask, setFormData]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title || !formData.date || !formData.status) {
      alert("Please fill in all required fields");
      return;
    }

    // Ensure all fields are defined for the Task type
    const taskData: Task = {
      id: initialTask?.id || Date.now().toString(), // Use existing ID for editing
      title: formData.title,
      description: formData.description || "",
      date: formData.date,
      status: formData.status,
      priority: formData.priority || "",
    };

    if (initialTask) {
      // Update task if initialTask is provided
      await updateTask(taskData);
    } else {
      // Add new task if no initialTask
      await addTask(taskData);
    }

    setFormData({
      title: "",
      description: "",
      date: "",
      status: "",
      priority: "",
    });
    closeModal(); // Close modal after form submission
  };

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
          {/* Heading */}
          <div className="relative mb-8">
            <h1 className="text-2xl font-bold text-left -mt-3">
              <span className="text-purple-500">⊕</span>{" "}
              {initialTask ? "Edit Task" : "Create New Task"}
            </h1>
            {/* Close Button */}
            <button
              type="button"
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl font-bold -mt-4"
            >
              &times;
            </button>
          </div>

          {/* Form Fields */}
          <form onSubmit={handleSubmit}>
            {/* Title */}
            <div className="mb-6">
              <label className="block mb-2 text-base font-medium">
                Title <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="title"
                value={formData.title || ""}
                onChange={handleChange}
                className="border border-gray-300 rounded-lg p-2 w-full"
                placeholder="Select here"
                required
              />
            </div>

            {/* Description */}
            <div className="mb-6">
              <label className="block mb-2 text-base font-medium">
                Description
              </label>
              <textarea
                name="description"
                value={formData.description || ""}
                onChange={handleChange}
                className="border border-gray-300 rounded-lg p-2 w-full"
                placeholder="Describe the task"
              />
            </div>

            {/* Date */}
            <div className="mb-6">
              <label className="block mb-2 text-base font-medium">
                Date <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                name="date"
                value={formData.date || ""}
                onChange={handleChange}
                className="border border-gray-300 rounded-lg p-2 w-full"
                required
              />
            </div>

            {/* Status */}
            <div className="mb-6">
              <label className="block mb-2 text-base font-medium">
                Status <span className="text-red-500">*</span>
              </label>
              <select
                name="status"
                value={formData.status || ""}
                onChange={handleChange}
                className="border border-gray-300 rounded-lg p-2 w-full"
                required
              >
                <option value="">Select Status</option>
                <option value="Todo">Todo</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
              </select>
            </div>

            {/* Priority */}
            <div className="mb-6">
              <label className="block mb-2 text-base font-medium">
                Priority
              </label>
              <select
                name="priority"
                value={formData.priority || ""}
                onChange={handleChange}
                className="border border-gray-300 rounded-lg p-2 w-full"
              >
                <option value="">Select Priority</option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            >
              {initialTask ? "Update Task" : "Create Task"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ModalForm;
