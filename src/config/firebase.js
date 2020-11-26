import firebase from "firebase";
import 'firebase/storage';

const config = {
    apiKey: "AIzaSyASPR7d_a2F22IHyfihhwoZ5dVKb7Jc_uA",
    authDomain: "codigoonline-ea7a1.firebaseapp.com",
    databaseURL: "https://codigoonline-ea7a1.firebaseio.com",
    projectId: "codigoonline-ea7a1",
    storageBucket: "codigoonline-ea7a1.appspot.com",
    messagingSenderId: "674823078969",
    appId: "1:674823078969:web:aecd81b8dbc26d034df9e8", 

    // apiKey: "AIzaSyC8j24Hwa0jKXDFmS1Ao_InATn-GrkvoIg",
    // authDomain: "codigoonlinea.firebaseapp.com",
    // databaseURL: "https://codigoonlinea.firebaseio.com",
    // projectId: "codigoonlinea",
    // storageBucket: "codigoonlinea.appspot.com",
    // messagingSenderId: "1088371243506",
    // appId: "1:1088371243506:web:2833ea16c6377b2e67536b",  
  };

const fire = firebase.initializeApp(config);
const storage = firebase.storage();

export {fire as default, firebase, storage};

