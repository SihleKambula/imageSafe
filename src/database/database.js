import { auth, DB } from "./firebase";
import {
  collection,
  doc,
  updateDoc,
  arrayUnion,
  setDoc,
} from "firebase/firestore";

export const addUser = async (userID) => {
  await setDoc(doc(DB, "users", userID), {
    images: [],
  });
};

// used in storage
export const updateUserDoc = async (url) => {
  const userID = auth.currentUser.uid;
  const collectionRef = collection(DB, "users");
  const docRef = doc(collectionRef, userID);
  return await updateDoc(docRef, {
    images: arrayUnion(url),
  });
};
