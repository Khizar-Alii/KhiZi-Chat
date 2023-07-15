import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBdC0N4b0gD2AhCY1-LZ9OD1Ia2y5D5OHs",
  authDomain: "chat-35f38.firebaseapp.com",
  projectId: "chat-35f38",
  storageBucket: "chat-35f38.appspot.com",
  messagingSenderId: "629722196856",
  appId: "1:629722196856:web:64c273c84099f7bf0d368d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()