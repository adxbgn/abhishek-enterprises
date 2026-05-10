// Import the functions you need from the SDKs you need
import { initializeApp, getApps, FirebaseApp } from "firebase/app";
import { getAnalytics, Analytics } from "firebase/analytics";
import { getAuth, Auth } from "firebase/auth";
import { getFirestore, Firestore } from "firebase/firestore";
import { getStorage, FirebaseStorage } from "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWHinZ7IWDpCh1STK3Jq9FdzoIrattVVQ",
  authDomain: "swadeshi-impex.firebaseapp.com",
  projectId: "swadeshi-impex",
  storageBucket: "swadeshi-impex.firebasestorage.app",
  messagingSenderId: "695495931226",
  appId: "1:695495931226:web:538b31ca9ace8dbd0f2f63",
  measurementId: "G-EKRH566SC3"
};

// Initialize Firebase
// Check if Firebase is already initialized to avoid duplicate initialization
let app: FirebaseApp;
let analytics: Analytics | null = null;
let auth: Auth;
let db: Firestore;
let storage: FirebaseStorage;

if (typeof window !== "undefined") {
  // Only initialize on client side
  if (getApps().length === 0) {
    app = initializeApp(firebaseConfig);
  } else {
    app = getApps()[0];
  }
  
  // Initialize Analytics only on client side
  analytics = getAnalytics(app);
  auth = getAuth(app);
  db = getFirestore(app);
  storage = getStorage(app);
} else {
  // For server-side, just initialize the app without analytics
  if (getApps().length === 0) {
    app = initializeApp(firebaseConfig);
  } else {
    app = getApps()[0];
  }
  auth = getAuth(app);
  db = getFirestore(app);
  storage = getStorage(app);
}

export { app, analytics, auth, db, storage };
