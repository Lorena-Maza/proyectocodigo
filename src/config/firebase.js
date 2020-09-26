import firebase from "firebase";
import 'firebase/storage';

const config = {
  // apiKey: "AIzaSyBlzlBru3REV9AnAwaJABrwazByAvChFX8",
  // authDomain: "codigoonline-9608f.firebaseapp.com",
  // databaseURL: "https://codigoonline-9608f.firebaseio.com",
  // projectId: "codigoonline-9608f",
  // storageBucket: "codigoonline-9608f.appspot.com",
  // messagingSenderId: "510045640379",
  // appId: "1:510045640379:web:a4657c2cf73c9a7553fb9e",

  apiKey: "AIzaSyC8j24Hwa0jKXDFmS1Ao_InATn-GrkvoIg",
    authDomain: "codigoonlinea.firebaseapp.com",
    databaseURL: "https://codigoonlinea.firebaseio.com",
    projectId: "codigoonlinea",
    storageBucket: "codigoonlinea.appspot.com",
    messagingSenderId: "1088371243506",
    appId: "1:1088371243506:web:2833ea16c6377b2e67536b",
};

const fire = firebase.initializeApp(config);
const storage = firebase.storage();

export {fire as default, firebase, storage}