// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage} from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyB0D8KonCSgpqjwg02fCqKRsqhHWCVLiCY",
  authDomain: "whatsapp-clone-83c83.firebaseapp.com",
  projectId: "whatsapp-clone-83c83",
  storageBucket: "whatsapp-clone-83c83.appspot.com",
  messagingSenderId: "391953870596",
  appId: "1:391953870596:web:fd3e74c742ef1e4ed1aa51",
  measurementId: "G-84CZJWQC4W"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage()