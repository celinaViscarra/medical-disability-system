import firebase from 'firebase/app';
import 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCzvQVKJYXev-SJFBEFik3xcavUsugjY6o",
    authDomain: "md-system-3a674.firebaseapp.com",
    projectId: "md-system-3a674",
    storageBucket: "md-system-3a674.appspot.com",
    messagingSenderId: "608926718417",
    appId: "1:608926718417:web:899aadd6535862d01428f0"
  };

  // Initialize Firebase
 const fb = firebase.initializeApp(firebaseConfig);

 export const db = fb.firestore();
