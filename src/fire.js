import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDNwfxzCbE-W1JUHWASYXXwjBSMZHKm4pg",
    authDomain: "todo-3014f.firebaseapp.com",
    databaseURL: "https://todo-3014f.firebaseio.com",
    projectId: "todo-3014f",
    storageBucket: "todo-3014f.appspot.com",
    messagingSenderId: "67516541271",
    appId: "1:67516541271:web:4e3b5b00a76812ae74f612",
    measurementId: "G-TQJYBV97JL"
  };

var fire = firebase.initializeApp(firebaseConfig);

export default fire;