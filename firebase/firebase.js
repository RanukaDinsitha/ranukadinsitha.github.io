// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDP36Q8h34K9ZHo1p0KnWrLoSK7v-l0CwI",
  authDomain: "vsuiteproj.firebaseapp.com",
  projectId: "vsuiteproj",
  storageBucket: "vsuiteproj.appspot.com",
  messagingSenderId: "895355338155",
  appId: "1:895355338155:web:911e861114e729d26a66ee",
  measurementId: "G-6LJHM0QE4L",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
