import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "my-secret-firebase-config-API-KEY",
  authDomain: "online-clothing-store-db-secret.firebaseapp.com",
  projectId: "online-clothing-store-db-secret",
  storageBucket: "online-clothing-store-db-secret.firebasestorage.app",
  messagingSenderId: "secret",
  appId: "secret",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
