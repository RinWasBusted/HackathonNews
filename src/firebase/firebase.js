// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAy91z9omF39mzXMMeFF2uZggBe9RjYUlA",
  authDomain: "hackathonnews.firebaseapp.com",
  projectId: "hackathonnews",
  storageBucket: "hackathonnews.firebasestorage.app",
  messagingSenderId: "409847120882",
  appId: "1:409847120882:web:9af1602435f0099f50e16b",
  measurementId: "G-5SBY09TJ09",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
