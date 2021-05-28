import firebase from "firebase";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA72FvhPklEeHcrdMwa2Qzh3ZDg5KmTrnQ",
  authDomain: "clone-c51fe.firebaseapp.com",
  projectId: "clone-c51fe",
  storageBucket: "clone-c51fe.appspot.com",
  messagingSenderId: "425280880946",
  appId: "1:425280880946:web:eb8dccf45713d42df6d72b",
  measurementId: "G-E6KTQGDP15"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
