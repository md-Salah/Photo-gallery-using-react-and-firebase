import React, { useEffect, useState } from "react";
import { db } from "../firebase/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

export const useFirestore = (table) => {
  const [docs, setDocs] = useState([]);

  const collectionRef = collection(db, table);

  const getUrls = async () => {
    const data = await getDocs(collectionRef);
    let dataArray = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    setDocs(dataArray);
  };

  useEffect(() => {
    getUrls();
  }, [table]);

  return { docs };
};
