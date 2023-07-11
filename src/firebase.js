import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBkHQnAiO0l2rrbM92Yve-szrelDIG8HZc",
  authDomain: "react-firebase-tailwindcss-1.firebaseapp.com",
  projectId: "react-firebase-tailwindcss-1",
  storageBucket: "react-firebase-tailwindcss-1.appspot.com",
  messagingSenderId: "463495936163",
  appId: "1:463495936163:web:1ce27b76c030e64bf32716",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
