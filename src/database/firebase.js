import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAuboqsRjRpNplLnegwTFR1x-6ArBqj6zU",
  authDomain: "imagesafe-87603.firebaseapp.com",
  projectId: "imagesafe-87603",
  storageBucket: "imagesafe-87603.appspot.com",
  messagingSenderId: "246146996461",
  appId: "1:246146996461:web:d580b7d1b7c22e622f94e4",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
