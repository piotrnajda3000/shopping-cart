import { getStorage, type FirebaseStorage } from "firebase/storage";
// Import the functions you need from the SDKs you need
import { initializeApp, type FirebaseApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  query,
  getDoc,
  where,
  doc,
  type Firestore,
} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPKr2VWNvvjHy4egruRSewj-o0qTuQzDQ",
  authDomain: "shopping-cart-e0e89.firebaseapp.com",
  projectId: "shopping-cart-e0e89",
  storageBucket: "shopping-cart-e0e89.appspot.com",
  messagingSenderId: "364184991748",
  appId: "1:364184991748:web:dbc3e17440a08aad071d51",
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);

// Initialize Cloud Storage and get a reference to the service
// const storage = getStorage(app);

// Singleton class

class Firebase {
  private static instance: null | Firebase = null;

  app: FirebaseApp;
  storage: FirebaseStorage;
  db: Firestore;

  constructor() {
    const app = initializeApp(firebaseConfig);
    this.app = app;
    this.storage = getStorage(app);
    this.db = getFirestore(app);
  }

  static getInstance() {
    if (!Firebase.instance) {
      Firebase.instance = new Firebase();
    }
    return Firebase.instance;
  }

  async importDataArray<T extends Array<Record<string, any>>>(
    data: T,
    coll: string
  ) {
    for (const d of data) {
      await addDoc(collection(this.db, coll), d);
    }
  }

  async getCollection(coll: string) {
    const q = query(collection(this.db, coll));
    const snapshot = await getDocs(q);
    return snapshot.docs.map((doc) => doc.data());
  }

  async getCollectionByWhere(
    coll: string,
    whereParams: { key: string; id: string }
  ) {
    const { key, id } = whereParams;
    const q = query(collection(this.db, coll), where(key, "==", id));
    const snapshot = await getDocs(q);
    return snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  }

  async getDocument(coll: string, id: string) {
    const docRef = doc(this.db, coll, id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return { ...docSnap.data(), id: docSnap.id };
    }
    return null;
  }
}

export const FIREBASE = Firebase.getInstance();
