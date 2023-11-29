// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-c50c0.firebaseapp.com",
  projectId: "mern-estate-c50c0",
  storageBucket: "mern-estate-c50c0.appspot.com",
  messagingSenderId: "588730039825",
  appId: "1:588730039825:web:d84b1eb60ff7740532bbb0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);