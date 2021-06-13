import firebase from 'firebase/app';

// const firebaseConfig = {
//     apiKey: "AIzaSyBAzNIRngGiy7uB3WT4QwTgUfOjyb_oimk",
//     authDomain: "finalproject-45305.firebaseapp.com",
//     projectId: "finalproject-45305",
//     storageBucket: "finalproject-45305.appspot.com",
//     messagingSenderId: "1075296056541",
//     appId: "1:1075296056541:web:751e3fc17e52fe00cf9734",
//     measurementId: "G-KP343J5XHP"
//   };
const firebaseConfig = {
  apiKey: "AIzaSyDRYPPiBFxSn97KtLAP8mYNJyraBFL2qE8",
  authDomain: "photographic-52ad6.firebaseapp.com",
  projectId: "photographic-52ad6",
  storageBucket: "photographic-52ad6.appspot.com",
  messagingSenderId: "315713218116",
  appId: "1:315713218116:web:1e43c9cba9fdf997977e11"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore()
  const auth = firebase.auth()
  const storage = firebase.storage()
  export{db,auth,storage}