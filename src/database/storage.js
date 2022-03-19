import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { updateUserDoc } from "./database";
import { storage } from "./firebase";

export const uploadImage = async (imageFile) => {
  const imageref = ref(storage, imageFile.name);
  try {
    await uploadBytes(imageref, imageFile);
    const url = await getDownloadURL(imageref);
    await updateUserDoc(url);
  } catch (error) {
    return error.code;
  }
};
