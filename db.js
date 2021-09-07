const firebase = require('firebase'); 
const firebaseConfig = {
    apiKey: "AIzaSyBkz4U7HGQN1GE6nvsm821Hp1ofpZ54q84",
    authDomain: "alest-desafio.firebaseapp.com",
    projectId: "alest-desafio",
    storageBucket: "alest-desafio.appspot.com",
    messagingSenderId: "1057801205851",
    appId: "1:1057801205851:web:e5dcfa4f14633e45b6677e"
  };

const db = firebase.initializeApp(firebaseConfig); 

module.exports = db;  
