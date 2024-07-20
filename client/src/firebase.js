// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blog-app-8db6b.firebaseapp.com",
  projectId: "blog-app-8db6b",
  storageBucket: "blog-app-8db6b.appspot.com",
  messagingSenderId: "686739635059",
  appId: "1:686739635059:web:60254afa60867bf9caa306"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);