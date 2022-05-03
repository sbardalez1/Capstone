import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyCsu1ZR5NzxPvvKb3SLko6kewcblJSm2fg",

  authDomain: "capstone-777a0.firebaseapp.com",

  projectId: "capstone-777a0",

  storageBucket: "capstone-777a0.appspot.com",

  messagingSenderId: "1039733496157",

  appId: "1:1039733496157:web:4e4755376bcae9c3a3b0b4",

  measurementId: "G-1S4JLLWSCE"

};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const db = firebaseApp.firestore();

export { auth, provider };
export default db;