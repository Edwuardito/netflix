import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyC2_47Nv9PSqeh0yoDKXOSEo_gWpsWJ_c8",
    authDomain: "portfolionetflix-d0ff4.firebaseapp.com",
    projectId: "portfolionetflix-d0ff4",
    storageBucket: "portfolionetflix-d0ff4.appspot.com",
    messagingSenderId: "95369454758",
    appId: "1:95369454758:web:f431204072ec1aaa704067"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const auth = firebase.auth()

  export {auth}