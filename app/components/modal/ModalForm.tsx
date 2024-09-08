import React from "react";
import { useFormData } from "@/app/contexts/FormDataContext";

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
}

const ModalForm: React.FC<ModalFormProps> = ({ closeModal }) => {
  const { formData, setFormData, addTask } = useFormData();

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title || !formData.date || !formData.status) {
      alert("Please fill in all required fields");
      return;
    }

    const newTask = { ...formData, id: Date.now().toString() } as Task;
    addTask(newTask);

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
    <form onSubmit={handleSubmit} className="relative">
      {/* Heading */}
      <div className="relative mb-8">
        <h1 className="text-2xl font-bold text-left -mt-3">
          <span className="text-purple-500">⊕</span> Create New Task
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

      {/* Title */}
      <div className="mb-6">
        <label className="block mb-2 text-base font-medium">
          Title <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="border border-gray-300 rounded-lg p-2 w-full"
          placeholder="Select here"
          required
        />
      </div>

      {/* Description */}
      <div className="mb-6">
        <label className="block mb-2 text-base font-medium">Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="border border-gray-300 rounded-lg p-2 w-full"
          rows={4}
          placeholder="Add here"
        />
      </div>

      {/* Date */}
      <div className="mb-6">
        <label className="block mb-2 text-base font-medium">
          Select Date <span className="text-red-500">*</span>
        </label>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="border border-gray-300 rounded-lg p-2 w-full"
          placeholder="DD/MM/YY"
          required
        />
      </div>

      {/* Status */}
      <div className="mb-6">
        <label className="block mb-2 text-base font-medium">Status</label>
        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="border border-gray-300 rounded-lg p-2 w-full"
        >
          <option value="" disabled>
            Select here
          </option>
          <option value="Todo">Todo</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
      </div>

      {/* Priority */}
      <div className="mb-6">
        <label className="block mb-2 text-base font-medium">Priority</label>
        <select
          name="priority"
          value={formData.priority}
          onChange={handleChange}
          className="border border-gray-300 rounded-lg p-2 w-full"
        >
          <option value="" disabled>
            Select here
          </option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
      </div>

      {/* Buttons */}
      <div className="flex justify-end mt-8 space-x-4 -mb-4">
        <button
          type="button"
          className="border border-purple-500 text-purple-500 px-6 py-2 rounded-lg text-base font-normal"
          onClick={() => {
            setFormData({
              title: "",
              description: "",
              date: "",
              status: "",
              priority: "",
            });
            closeModal();
          }}
        >
          Cancel
        </button>
        <button
          type="submit"
          className="bg-purple-500 text-white px-6 py-2 rounded-lg border border-purple-500 text-base"
        >
          Create
        </button>
      </div>
    </form>
  );
};

export default ModalForm;
