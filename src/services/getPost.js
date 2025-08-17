import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";

async function getPost(collectionName, docID) {
  try {
    const docRef = doc(db, collectionName, docID);
    const snapshot = await getDoc(docRef);
    if (snapshot.exists()) {
      const data = { id: snapshot.id, ...snapshot.data() };
      return data;
    } else {
      console.error("No such document exists with ID:", docID);
    }
  } catch (e) {
    console.error("Failed to get doc:" + e);
    throw e;
  }
}

export default getPost;
