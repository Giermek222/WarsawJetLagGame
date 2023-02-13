import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyAyAaDw5zsKfcNq3MvTvLeBwOf5i69sbpk",
  authDomain: "warsawjetlaggame.firebaseapp.com",
  databaseURL: "https://warsawjetlaggame-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "warsawjetlaggame",
  storageBucket: "warsawjetlaggame.appspot.com",
  messagingSenderId: "980047826411",
  appId: "1:980047826411:web:da7bf252e7e905430a1dae",
  measurementId: "G-TTZTC3CW8F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);