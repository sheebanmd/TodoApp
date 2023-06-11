import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC3WnCGLAqM5pWamdr8GO8Cppjv5uA7yzQ",
  authDomain: "authentication-59c12.firebaseapp.com",
  projectId: "authentication-59c12",
  storageBucket: "authentication-59c12.appspot.com",
  messagingSenderId: "396608297208",
  appId: "1:396608297208:web:1b219471f031f51d1c830d",
  measurementId: "G-P1TX04LY2Z"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
