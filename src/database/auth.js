import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "./firebase";

// Sign up with email and password
export const handleEmailAndPasswordSignUp = async (email, password) => {
  const userCred = await createUserWithEmailAndPassword(auth, email, password);
  if (userCred.user) {
    localStorage.setItem("user", JSON.stringify(userCred.user));
  }

  return userCred.user;
};

// Login user in
export const handleUserLogin = async (email, password) => {
  const userCred = await signInWithEmailAndPassword(auth, email, password);
  if (userCred.user) {
    localStorage.setItem("user", JSON.stringify(userCred.user));
  }
  return userCred.user;
};

// Sign user out
export const handleSignOut = async () => {
  await signOut(auth);
  localStorage.setItem("user", JSON.stringify(null));
  return null;
};
