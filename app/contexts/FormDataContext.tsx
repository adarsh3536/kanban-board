// app/contexts/FormDataContext.tsx

import React, { createContext, useContext, useState } from "react";

interface Task {
  id: string;
  title: string;
  description: string;
  date: string;
  status: string;
  priority: string;
}

interface FormDataContextType {
  formData: Partial<Task>;
  setFormData: React.Dispatch<React.SetStateAction<Partial<Task>>>;
  tasks: { [key: string]: Task[] };
  addTask: (task: Task) => void;
  removeTask: (taskId: string, status: string) => void;
}

const FormDataContext = createContext<FormDataContextType | undefined>(
  undefined
);

export const useFormData = () => {
  const context = useContext(FormDataContext);
  if (!context) {
    throw new Error("useFormData must be used within a FormDataProvider");
  }
  return context;
};

export const FormDataProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [formData, setFormData] = useState<Partial<Task>>({
    title: "",
    description: "",
    date: "",
    status: "",
    priority: "",
  });

  const [tasks, setTasks] = useState<{ [key: string]: Task[] }>({
    Todo: [],
    "In Progress": [],
    Completed: [],
  });

  const addTask = (task: Task) => {
    setTasks((prevTasks) => ({
      ...prevTasks,
      [task.status]: [...(prevTasks[task.status] || []), task],
    }));
  };

  const removeTask = (taskId: string, status: string) => {
    setTasks((prevTasks) => ({
      ...prevTasks,
      [status]: prevTasks[status].filter((task) => task.id !== taskId),
    }));
  };

  return (
    <FormDataContext.Provider
      value={{ formData, setFormData, tasks, addTask, removeTask }}
    >
      {children}
    </FormDataContext.Provider>
  );
};
