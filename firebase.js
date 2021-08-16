import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDKiPcJn7UtijKsu0GT54XKbChv1aPcd7M",
  authDomain: "webshop-86ffa.firebaseapp.com",
  projectId: "webshop-86ffa",
  storageBucket: "webshop-86ffa.appspot.com",
  messagingSenderId: "359930045374",
  appId: "1:359930045374:web:c3407cc03bbb9221cd8fef",
};

firebase.apps[0] ?? firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
