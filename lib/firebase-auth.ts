import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  type Auth,
  type User,
} from "firebase/auth";
import { getFirebaseApp } from "./firebase";

let _auth: Auth | null = null;

function getAuthInstance(): Auth {
  if (!_auth) _auth = getAuth(getFirebaseApp());
  return _auth;
}

export function signIn(email: string, password: string) {
  return signInWithEmailAndPassword(getAuthInstance(), email, password);
}

export function signOutAdmin() {
  return signOut(getAuthInstance());
}

export function onAuthChange(callback: (user: User | null) => void) {
  return onAuthStateChanged(getAuthInstance(), callback);
}

export function getAuthForToken(): Auth {
  return getAuthInstance();
}
