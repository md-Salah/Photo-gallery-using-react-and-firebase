import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "@firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCy1nFzbT_xi5tUZLL79FJ1YEgLTXoQuoI",
  authDomain: "photogallary-c2619.firebaseapp.com",
  projectId: "photogallary-c2619",
  storageBucket: "photogallary-c2619.appspot.com",
  messagingSenderId: "946865820425",
  appId: "1:946865820425:web:7a36b3e86afc08ac4379d8",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
