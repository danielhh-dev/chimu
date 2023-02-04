// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8w5jr--9Eig1ugzBrTRbYqNtGyWbdpOY",
  authDomain: "chimu-b2c67.firebaseapp.com",
  projectId: "chimu-b2c67",
  storageBucket: "chimu-b2c67.appspot.com",
  messagingSenderId: "1032094772996",
  appId: "1:1032094772996:web:8108e0762e4879f456aa51",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const initFirebase = () => {
  return app;
};
