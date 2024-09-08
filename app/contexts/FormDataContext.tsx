import React, { createContext, useContext, useState, ReactNode } from "react";

interface FormData {
  title: string;
  description: string;
  date: string;
  status: string;
  priority: string;
}

interface Task extends FormData {
  id: string; // Add an id to uniquely identify tasks
}

interface FormDataContextType {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  tasks: Task[]; // List of tasks
  addTask: (task: Task) => void; // Method to add a task
}

const FormDataContext = createContext<FormDataContextType | undefined>(
  undefined
);

export const FormDataProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [formData, setFormData] = useState<FormData>({
    title: "",
    description: "",
    date: "",
    status: "",
    priority: "",
  });
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (task: Task) => {
    setTasks([...tasks, task]);
  };

  return (
    <FormDataContext.Provider value={{ formData, setFormData, tasks, addTask }}>
      {children}
    </FormDataContext.Provider>
  );
};

export const useFormData = (): FormDataContextType => {
  const context = useContext(FormDataContext);
  if (!context) {
    throw new Error("useFormData must be used within a FormDataProvider");
  }
  return context;
};
