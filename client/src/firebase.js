// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-9343d.firebaseapp.com",
  projectId: "mern-estate-9343d",
  storageBucket: "mern-estate-9343d.appspot.com",
  messagingSenderId: "473547151733",
  appId: "1:473547151733:web:b89c5df6b4d0d286415b3c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
