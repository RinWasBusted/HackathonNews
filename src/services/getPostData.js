import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase";

export default async function getPostData(collectionName) {
  try {
    const collectionRef = collection(db, collectionName);
    const snapshot = await getDocs(collectionRef);
    const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    return data;
  } catch (e) {
    console.error("Failed to get post data from firestore:" + e);
  }
}
