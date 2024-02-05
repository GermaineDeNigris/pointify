import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCxbwDNdRhuPOyur7HCrTsizgwEd0JtfaA",
  authDomain: "pointify-8023e.firebaseapp.com",
  projectId: "pointify-8023e",
  storageBucket: "pointify-8023e.appspot.com",
  messagingSenderId: "794020461782",
  appId: "1:794020461782:web:a43257d322095c4408dd77",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db };