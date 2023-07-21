import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAlbKw4fWoInxtvNO-1edUlYarVmRKth9w",
  authDomain: "chat-20a4d.firebaseapp.com",
  projectId: "chat-20a4d",
  storageBucket: "chat-20a4d.appspot.com",
  messagingSenderId: "567553432070",
  appId: "1:567553432070:web:535774b405cc7bf56e0187",
  measurementId: "G-TP3XRX4CEG"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()