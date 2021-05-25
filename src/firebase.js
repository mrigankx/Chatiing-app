// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCPX4Q6H_G_hDga0yShVnRMWzciRbStpng",
  authDomain: "chat-application-mrigankx.firebaseapp.com",
  projectId: "chat-application-mrigankx",
  storageBucket: "chat-application-mrigankx.appspot.com",
  messagingSenderId: "117778004702",
  appId: "1:117778004702:web:5a547335665706d674e04f",
  measurementId: "G-2SL6332BZM",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
