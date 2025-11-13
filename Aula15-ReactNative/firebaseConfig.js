// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCOCi_d5m8-krBC4fulePXzVWrwB3efQOw",
  authDomain: "aulanative.firebaseapp.com",
  projectId: "aulanative",
  storageBucket: "aulanative.firebasestorage.app",
  messagingSenderId: "825218352366",
  appId: "1:825218352366:web:ae653908b495de50ff5fff",
  measurementId: "G-N88LGYQ50B"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);