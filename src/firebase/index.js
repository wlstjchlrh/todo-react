import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBKdRmeMp66l4T_A7HW3Da3KVe6su1XUKw",
  authDomain: "todofiffffn.firebaseapp.com",
  projectId: "todofiffffn",
  storageBucket: "todofiffffn.appspot.com",
  messagingSenderId: "992667691580",
  appId: "1:992667691580:web:1bdaaa1008ef1d87d73139",
  measurementId: "G-06H9SYDLLW"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { auth, db };