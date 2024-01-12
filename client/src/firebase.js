import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "novahorizon-91d6b.firebaseapp.com",
  projectId: "novahorizon-91d6b",
  storageBucket: "novahorizon-91d6b.appspot.com",
  messagingSenderId: "1060899398186",
  appId: "1:1060899398186:web:194a96099c4b3d41e05953",
};

export const app = initializeApp(firebaseConfig);
