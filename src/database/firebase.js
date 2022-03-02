import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCmCmHYy8ouOlp9NUgvpR7dLcBgqPlsbt8",
  authDomain: "imagesafe-2bca6.firebaseapp.com",
  projectId: "imagesafe-2bca6",
  storageBucket: "imagesafe-2bca6.appspot.com",
  messagingSenderId: "555928050933",
  appId: "1:555928050933:web:35bac1d8fe8362fa7679bc",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage(app);
export const DB = getFirestore();
