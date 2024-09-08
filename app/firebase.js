// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYlCnPTHvJqoZ0AzEjr-_1wZRfg-PxASA",
  authDomain: "kanban-board-3cbd8.firebaseapp.com",
  projectId: "kanban-board-3cbd8",
  storageBucket: "kanban-board-3cbd8.appspot.com",
  messagingSenderId: "849563286093",
  appId: "1:849563286093:web:7158f921a9799a14dffa04",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
