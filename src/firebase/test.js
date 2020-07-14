import firebase from "firebase/app";
import "firebase/firestore";

const firestore = firebase.firestore();

firestore
  .collection("users")
  .doc("a98pfzVa1njFIZgrLUqY")
  .collection("cartItems")
  .doc("K3sAa87MyrHsajLx00fm");
firestore.doc("/users/a98pfzVa1njFIZgrLUqY/cartItems/K3sAa87MyrHsajLx00fm");
firestore.collection("/users/a98pfzVa1njFIZgrLUqY/cartItems");
