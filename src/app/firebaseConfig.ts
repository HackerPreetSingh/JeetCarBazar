// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDLQZjaVcDIM6GZb_zkCK7T0FiD0Xkcy_0",
  authDomain: "jeet-car-bazar-13.firebaseapp.com",
  projectId: "jeet-car-bazar-13",
  storageBucket: "jeet-car-bazar-13.firebasestorage.app",
  messagingSenderId: "743674357363",
  appId: "1:743674357363:web:c8d36317e86a9d7c166c06",
  measurementId: "G-V962940DD8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };