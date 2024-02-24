// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAY_uENOskBG9zOQav0U5aRR-IVxfIyTZw",
  authDomain: "audiophile-selfmade.firebaseapp.com",
  projectId: "audiophile-selfmade",
  storageBucket: "audiophile-selfmade.appspot.com",
  messagingSenderId: "944257605124",
  appId: "1:944257605124:web:11f2225766486230e99f51",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { googleProvider, auth };
