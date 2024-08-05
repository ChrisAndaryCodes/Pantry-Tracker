// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6gQ-sYu_EbIuVtVE55TFUA3E-DI8luf4",
  authDomain: "pantry-tracker-89f14.firebaseapp.com",
  projectId: "pantry-tracker-89f14",
  storageBucket: "pantry-tracker-89f14.appspot.com",
  messagingSenderId: "972678717122",
  appId: "1:972678717122:web:9bc7a1d885cd6536bee55b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
