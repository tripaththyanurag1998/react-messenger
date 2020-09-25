import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyC0S7XLuD_M3ZP_zffGoG5ui9tRfXi_jc4",
    authDomain: "messenger-32356.firebaseapp.com",
    databaseURL: "https://messenger-32356.firebaseio.com",
    projectId: "messenger-32356",
    storageBucket: "messenger-32356.appspot.com",
    messagingSenderId: "296506753434",
    appId: "1:296506753434:web:d9e5bc85dbb25d65e0fa23",
    measurementId: "G-4VMQ3Q8LGW"
});

const db = firebaseApp.firestore();

export default db;