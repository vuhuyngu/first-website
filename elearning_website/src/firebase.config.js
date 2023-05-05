// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAy40GIL-AGKFLM8x9N1OsN274HwBtgysk",
  authDomain: "elearning-website-d04fa.firebaseapp.com",
  projectId: "elearning-website-d04fa",
  storageBucket: "elearning-website-d04fa.appspot.com",
  messagingSenderId: "1085034116286",
  appId: "1:1085034116286:web:8b61fa0016b21f55cc5aef",
  measurementId: "G-RVQ8ED9X3E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);

export default app