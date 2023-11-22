import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDdXRmHPaEUyJDXSl6LqGyi7fB15KuSccw",
  authDomain: "netflix-clone-7171e.firebaseapp.com",
  projectId: "netflix-clone-7171e",
  storageBucket: "netflix-clone-7171e.appspot.com",
  messagingSenderId: "738252325481",
  appId: "1:738252325481:web:7a9a3bd4781fac59ab98f8",
  measurementId: "G-F19BDLSNWL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);