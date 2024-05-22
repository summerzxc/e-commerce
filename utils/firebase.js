// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1k7dRHuoCFXxeJfdoPpMAbDOz-cvSppY",
  authDomain: "soleil-e-commerce.firebaseapp.com",
  projectId: "soleil-e-commerce",
  storageBucket: "soleil-e-commerce.appspot.com",
  messagingSenderId: "510246178894",
  appId: "1:510246178894:web:1d48bd96da816834b2331f",
  measurementId: "G-G123ZRCTPK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export default storage