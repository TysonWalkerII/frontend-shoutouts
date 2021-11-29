import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyAZZO6eBYFEXcL9bXz2Jsdy1jwA6dGzptY",
  authDomain: "shoutouts2-bc2a6.firebaseapp.com",
  projectId: "shoutouts2-bc2a6",
  storageBucket: "shoutouts2-bc2a6.appspot.com",
  messagingSenderId: "709308060592",
  appId: "1:709308060592:web:317c226bdf96c19b373c75",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const authProvider = new GoogleAuthProvider();
export function signInWithGoogle(): void {
  signInWithPopup(auth, authProvider);
}
export function signOut(): void {
  auth.signOut();
}

export const storage = getStorage(app);
