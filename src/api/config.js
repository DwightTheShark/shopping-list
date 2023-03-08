import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBF1SintcLOe0-9WsILtphC9nDy09RABRI",
  authDomain: "smartshoppinglist-ea0f7.firebaseapp.com",
  projectId: "smartshoppinglist-ea0f7",
  storageBucket: "smartshoppinglist-ea0f7.appspot.com",
  messagingSenderId: "160043860910",
  appId: "1:160043860910:web:e67fade153269398b8be3f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
