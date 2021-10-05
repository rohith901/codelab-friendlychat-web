// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBUxhoaYwx4udtMVMqokkH382xf5Y4kJaM",
  authDomain: "web-chat-c8523.firebaseapp.com",
  projectId: "web-chat-c8523",
  storageBucket: "web-chat-c8523.appspot.com",
  messagingSenderId: "864253078976",
  appId: "1:864253078976:web:b31a8230acb2983fac2c25",
  measurementId: "G-F36DWKBSC1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
