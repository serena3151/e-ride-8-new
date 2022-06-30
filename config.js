import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyBODoD_gCoMJLlTXLdRvsp5NU2_eazXGl4",
  authDomain: "e-rid-e.firebaseapp.com",
  projectId: "e-rid-e",
  storageBucket: "e-rid-e.appspot.com",
  messagingSenderId: "899706225041",
  appId: "1:899706225041:web:d5fa515a38a30e12db9a30"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
