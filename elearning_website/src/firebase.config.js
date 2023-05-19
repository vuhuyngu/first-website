import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBDSFzqjXN-DWe-9bRpe1uT-GTHK--4pH4",
  authDomain: "homewebsite-9c05c.firebaseapp.com",
  projectId: "homewebsite-9c05c",
  storageBucket: "homewebsite-9c05c.appspot.com",
  messagingSenderId: "937626418612",
  appId: "1:937626418612:web:e88efc4516a4e56f98c6e1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
