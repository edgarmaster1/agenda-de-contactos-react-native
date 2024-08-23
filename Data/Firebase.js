import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAlLQ51dgKFhBx5IDndpXuKBzP_DvPcLs4",
    authDomain: "apprn-contactos.firebaseapp.com",
    projectId: "apprn-contactos",
    storageBucket: "apprn-contactos.appspot.com",
    messagingSenderId: "197410290921",
    appId: "1:197410290921:web:63d0b9b9d21a8640410478"
  };
  

  const fb = firebase.initializeApp(firebaseConfig);
  export const db = fb.firestore();