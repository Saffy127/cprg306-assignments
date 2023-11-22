import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

async function getItems(userId) {
    const items = [];
    const itemsCollectionRef = collection(db, 'users', userId, 'items');
    const querySnapshot = await getDocs(itemsCollectionRef);

    querySnapshot.forEach(doc => {
        items.push({ id: doc.id, ...doc.data() });
    });

    return items;
}

// The 'addItem' function adds a new item to the user's 'items' subcollection in Firestore and returns the ID of the new document:

async function addItem(userId, item) {
    const itemsCollectionRef = collection(db, 'users', userId, 'items');
    const docRef = await addDoc(itemsCollectionRef, item);

    return docRef.id;
}

