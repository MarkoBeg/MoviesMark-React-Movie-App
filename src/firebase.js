import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDetjJQW4Uiy5vLJYOwN3FGfshRYFg3wwo",
  authDomain: "netflix-5a8dc.firebaseapp.com",
  projectId: "netflix-5a8dc",
  storageBucket: "netflix-5a8dc.appspot.com",
  messagingSenderId: "610847779765",
  appId: "1:610847779765:web:59540bac6b3639aeccc7fc",
};

const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();
const auth = firebase.auth();

export { app, auth, db };
