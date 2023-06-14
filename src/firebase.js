// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhv0LyQwLqM3U1mykeOSXrpJGq4lGv55w",
  authDomain: "todo-app-yt-b129b.firebaseapp.com",
  projectId: "todo-app-yt-b129b",
  storageBucket: "todo-app-yt-b129b.appspot.com",
  messagingSenderId: "596348581209",
  appId: "1:596348581209:web:000d6404c3253e07590848"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)