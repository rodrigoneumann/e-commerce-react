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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
