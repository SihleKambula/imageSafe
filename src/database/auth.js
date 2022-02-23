import {
  createUserWithEmailAndPassword,
  signInAnonymously,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "./firebase";

//Handle anon sign in
export function handleAnonymousSignIn() {
  signInAnonymously(auth)
    .then((res) => console.log(res))
    .catch((error) => console.log(error.code));
}

// Sign up with email and password
export function handleEmailAndPasswordSignUp(email, password) {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCred) => {
      console.log(userCred.user);
    })
    .catch((error) => {
      console.log(error.code);
      console.log(error.message);
    });
}

// Login user in
export function handleUserLogin(email, password) {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCred) => {
      console.log(userCred.user);
      return userCred.user;
    })
    .catch((error) => {
      console.log(error.message);
    });
}
// Sign user out
export function handleSignOut() {
  signOut(auth).then(() => {
    console.log("I am out");
  });
}
