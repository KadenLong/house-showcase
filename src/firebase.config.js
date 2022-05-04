import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7sZBVBTMS-wYh8_BiCG-NmWkHVZLqgKM",
  authDomain: "house-marketplace-app-9d631.firebaseapp.com",
  projectId: "house-marketplace-app-9d631",
  storageBucket: "house-marketplace-app-9d631.appspot.com",
  messagingSenderId: "687851228522",
  appId: "1:687851228522:web:1c016c3e5b916152312913"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()