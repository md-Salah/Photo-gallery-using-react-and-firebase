import React, { useEffect, useState } from "react";
import { db, storage } from "../firebase/firebaseConfig";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";

const collectionRef = collection(db, "Images");

export const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [url, setUrl] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const storageRef = ref(storage, file.name);
    const uploadFile = uploadBytesResumable(storageRef, file);
    uploadFile.on(
      "state_changed",
      (snap) => {
        const percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentage);
      },
      (error) => {
        setError(error);
      },
      () => {
        getDownloadURL(uploadFile.snapshot.ref).then((downloadUrl) => {
          setUrl(downloadUrl);
          addDoc(collectionRef, { url: downloadUrl });
        });
      }
    );
  }, [file]);

  return { progress, url, error };
};
