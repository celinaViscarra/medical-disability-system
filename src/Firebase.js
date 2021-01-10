import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

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
 const db = fb.firestore();

 //For auth.
 const googleAuth = new firebase.auth.GithubAuthProvider();
 
 const auth = fb.auth()

 export {db, auth, googleAuth};
