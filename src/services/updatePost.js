import { setDoc, doc } from "firebase/firestore";
import { db } from "../firebase/firebase";

export default async function updatePost(collectionName, docID, post) {
  try {
    const docRef = doc(db, collectionName, docID);
    await setDoc(docRef, post);
  } catch (e) {
    console.error("Failed to update post:" + e);
  }
}
