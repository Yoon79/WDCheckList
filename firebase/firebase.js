import * as firebase from "firebase";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyA8DNG2fpxVPOTrCM_yFoRezQSClE8Nl58",
  authDomain: "justdoit-ecb64.firebaseapp.com",
  databaseURL:
    "https://justdoit-ecb64-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "justdoit-ecb64",
  storageBucket: "justdoit-ecb64.appspot.com",
  messagingSenderId: "1067416702625",
  appId: "1:1067416702625:web:b89400047690b53f1caae0",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
