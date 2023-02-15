import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";

const firebaseConfig = {
  apiKey: "AIzaSyA8w5jr--9Eig1ugzBrTRbYqNtGyWbdpOY",
  authDomain: "chimu-b2c67.firebaseapp.com",
  projectId: "chimu-b2c67",
  storageBucket: "chimu-b2c67.appspot.com",
  messagingSenderId: "1032094772996",
  appId: "1:1032094772996:web:8108e0762e4879f456aa51",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

//Subir una imagen a firebse y devolver un link de la misma
export const uploadFile = async (file) => {
  const storageRef = ref(storage, `uploaded/${v4()}`);
  await uploadBytes(storageRef, file);
  const url = await getDownloadURL(storageRef);
  return url;
};

export const initFirebase = () => {
  return app;
};
