// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMtwhJvSLmdfv0mUT5VkzS4aqY81A9_80",
  authDomain: "appfinances-e3f63.firebaseapp.com",
  projectId: "appfinances-e3f63",
  storageBucket: "appfinances-e3f63.firebasestorage.app",
  messagingSenderId: "801338122428",
  appId: "1:801338122428:web:aa469f1c718c4cf71b30b9",
  measurementId: "G-G5LGLZGG35"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);