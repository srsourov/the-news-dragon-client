// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQxY5hnD6KIkCeq8kWTYaYgdNhDqIJH6U",
  authDomain: "the-news-dragon-4f6da.firebaseapp.com",
  projectId: "the-news-dragon-4f6da",
  storageBucket: "the-news-dragon-4f6da.appspot.com",
  messagingSenderId: "600870738460",
  appId: "1:600870738460:web:2587804af3b225af079dd9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;