import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA1mCG33veH9Pngjhe4rMtB0vHIir7GXdc",
  authDomain: "wp-firebase-b6e69.firebaseapp.com",
  projectId: "wp-firebase-b6e69",
  storageBucket: "wp-firebase-b6e69.appspot.com",
  messagingSenderId: "547194047227",
  appId: "1:547194047227:web:9533100f3203f2ccc9be5e",
  measurementId: "G-0BD28S31K4"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { auth, db };