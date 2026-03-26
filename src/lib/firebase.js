import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDoOMeMc-4SNQ5Ll2JA7yLnEOZRgQDn4B4",
  authDomain: "kisah-kertas.firebaseapp.com",
  projectId: "kisah-kertas",
  storageBucket: "kisah-kertas.firebasestorage.app",
  messagingSenderId: "679939360979",
  appId: "1:679939360979:web:7558a88658d3175b29ac26",
  measurementId: "G-929PJ5TDW2"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
