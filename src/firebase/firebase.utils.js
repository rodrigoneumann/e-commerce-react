import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCeUo9mbfS5LKAzMIgvnPQkM17ov5zVLgM",
  authDomain: "ec-react.firebaseapp.com",
  databaseURL: "https://ec-react.firebaseio.com",
  projectId: "ec-react",
  storageBucket: "ec-react.appspot.com",
  messagingSenderId: "768583200856",
  appId: "1:768583200856:web:008c07b809f0c053861a2d",
  measurementId: "G-QGRV6GRZK0",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
