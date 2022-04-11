import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCohZGiaahXHjjMLARtC1Tv-98RwH-uIWU",
  authDomain: "image-community-675f8.firebaseapp.com",
  projectId: "image-community-675f8",
  storageBucket: "image-community-675f8.appspot.com",
  messagingSenderId: "238424111907",
  appId: "1:238424111907:web:e6a32460f2e3d666c66a96",
  measurementId: "G-VFVYNXFBBV",
};

firebase.initializeApp(firebaseConfig);

const apiKey = firebaseConfig.apiKey;
const auth = firebase.auth();
const firestore = firebase.firestore();
const storage = firebase.storage();

export{auth, apiKey, firestore, storage};