import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCrIHcDSzZNXTpJB7ADtibI3yjYnwwVJMw",
  authDomain: "chat-c378d.firebaseapp.com",
  projectId: "chat-c378d",
  storageBucket: "chat-c378d.appspot.com",
  messagingSenderId: "1054243067639",
  appId: "1:1054243067639:web:7cf61f89c760731f8a65f2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()