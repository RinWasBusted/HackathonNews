import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase/firebase";

export default async function addPost(collectionName, post) {
  try {
    const collectionRef = collection(db, collectionName);
    await addDoc(collectionRef, post);
  } catch (e) {
    console.error("Failed to add new post:" + e);
  }
}
