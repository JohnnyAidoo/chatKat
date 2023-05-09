// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
import {GoogleAuthProvider, getAuth, signInWithPopup} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKe7k_RxYhVBZAa3InmF1GOa_LVDK87MU",
  authDomain: "chatkat-9fdc3.firebaseapp.com",
  projectId: "chatkat-9fdc3",
  storageBucket: "chatkat-9fdc3.appspot.com",
  messagingSenderId: "658640581760",
  appId: "1:658640581760:web:4663986f4619969368e265",
  measurementId: "G-3DZW3L7WHE"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const  firestore = getFirestore(app);
export const provider = new GoogleAuthProvider();
export const auth = getAuth();
