
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyD2jsnkEQLJhiQxaaEQbwcnMnecj3YUabs",
  authDomain: "tiktok-jornada-a9e63.firebaseapp.com",
  projectId: "tiktok-jornada-a9e63",
  storageBucket: "tiktok-jornada-a9e63.appspot.com",
  messagingSenderId: "218996694107",
  appId: "1:218996694107:web:ee91a65ed4049f6c88737e"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;