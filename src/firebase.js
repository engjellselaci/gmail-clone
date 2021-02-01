import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB4x4nTWbmOM1zQOyvldhvEv6R6mEBSdWU",
  authDomain: "clone-a5b8f.firebaseapp.com",
  projectId: "clone-a5b8f",
  storageBucket: "clone-a5b8f.appspot.com",
  messagingSenderId: "566756497373",
  appId: "1:566756497373:web:dce8d45125ee50de824834",
  measurementId: "G-40CLSE0NCX",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
