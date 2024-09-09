import React, { createContext, useContext, useState, useEffect } from "react";
import { db } from "@/app/firebase"; // Adjust the import path as needed
import {
  collection,
  addDoc,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  updateDoc,
} from "firebase/firestore";

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
  removeTask: (taskId: string, status: string) => Promise<void>; // Updated signature
  updateTask: (task: Task) => void;
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

  useEffect(() => {
    // Fetch tasks from Firestore when the component mounts
    const fetchTasks = async () => {
      const q = query(collection(db, "tasks"));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const tasksData: { [key: string]: Task[] } = {
          Todo: [],
          "In Progress": [],
          Completed: [],
        };
        querySnapshot.forEach((doc) => {
          const task = doc.data() as Task;
          // Ensure the status exists in tasksData
          if (tasksData[task.status]) {
            tasksData[task.status].push({ ...task, id: doc.id });
          } else {
            console.warn(`Unexpected status field: ${task.status}`);
          }
        });
        setTasks(tasksData);
      });

      return () => unsubscribe();
    };

    fetchTasks();
  }, []);

  const addTask = async (task: Task) => {
    try {
      const docRef = await addDoc(collection(db, "tasks"), task);
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const removeTask = async (taskId: string) => {
    try {
      // You might need to adjust the logic if the status is used in the removal process
      await deleteDoc(doc(db, "tasks", taskId));
    } catch (e) {
      console.error("Error removing document: ", e);
    }
  };

  const updateTask = async (task: Task) => {
    try {
      // Cast task to the type expected by updateDoc
      await updateDoc(doc(db, "tasks", task.id), task as Record<string, any>);
    } catch (e) {
      console.error("Error updating document: ", e);
    }
  };

  return (
    <FormDataContext.Provider
      value={{ formData, setFormData, tasks, addTask, removeTask, updateTask }}
    >
      {children}
    </FormDataContext.Provider>
  );
};
