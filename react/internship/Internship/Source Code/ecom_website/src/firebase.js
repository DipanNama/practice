import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// FOR PRODUCTION OR SHARING PURPOSE
// const firebaseConfig = {
//     apiKey: process.env.REACT_APP_FIREBASE_KEY,
//     authDomain: "developers-hub-02.firebaseapp.com",
//     projectId: "developers-hub-02",
//     storageBucket: "developers-hub-02.appspot.com",
//     messagingSenderId: "1058779135381",
//     appId: "1:1058779135381:web:9f22e39a47edd63c45ca9c"
// };


// FOR DEVELOPMENT PURPOSE
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_KEY,
    authDomain: "developers-hub-01.firebaseapp.com",
    databaseURL: "https://developers-hub-01-default-rtdb.firebaseio.com",
    projectId: "developers-hub-01",
    storageBucket: "developers-hub-01.appspot.com",
    messagingSenderId: "98898945792",
    appId: "1:98898945792:web:5e62159355cf54002a75e5",
    measurementId: "G-XV9Q0V1PJX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
const storage = getStorage(app);

export { app, db, auth, storage }