// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIw20a4q3rX5mWRdnp5NxePjFiMY5pFWE",
  authDomain: "bloggingapplearning.firebaseapp.com",
  projectId: "bloggingapplearning",
  storageBucket: "bloggingapplearning.appspot.com",
  messagingSenderId: "139970245095",
  appId: "1:139970245095:web:702ef7be14d845ab210d42"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const db = getFirestore(app);