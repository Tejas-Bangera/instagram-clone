// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQH2Ru6qXinGvCwMDYKLTAqjQpFdT1jxw",
  authDomain: "project-instagram-clone-a1af8.firebaseapp.com",
  projectId: "project-instagram-clone-a1af8",
  storageBucket: "project-instagram-clone-a1af8.appspot.com",
  messagingSenderId: "1007980902523",
  appId: "1:1007980902523:web:afce80e04ac5940a36cade",
};

// Initialize Firebase
// Check if already initialized
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
