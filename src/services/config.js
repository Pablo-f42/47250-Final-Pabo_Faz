import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "tienda-canyon.firebaseapp.com",
  projectId: "tienda-canyon",
  storageBucket: "tienda-canyon.appspot.com",
  messagingSenderId: "190603927532",
  appId: "1:190603927532:web:0b1420cd2cdd3e1284aac9"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);