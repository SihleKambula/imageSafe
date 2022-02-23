import { signInAnonymously } from "firebase/auth";
import { auth } from "./firebase";

//Handle anon sign in
export function handleAnonymousSignIn() {
  signInAnonymously(auth)
    .then((res) => console.log(res))
    .catch((error) => console.log(error.code));
}
