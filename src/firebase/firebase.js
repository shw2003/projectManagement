import { getAuth } from "firebase/auth";
import firebase from "firebase/compat/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDtTsMcZoxB0k06XHhJ-hP9f3xn5CDab4A",
  authDomain: "capstone-b8be2.firebaseapp.com",
  projectId: "capstone-b8be2",
  storageBucket: "capstone-b8be2.appspot.com",
  messagingSenderId: "742537902743",
  appId: "1:742537902743:web:264104cfae19d11dbd07d2",
  // measurementId: "G-3ZYB4P5P19",
};

firebase.initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth();
export const storage = getStorage();

export default firebase;
