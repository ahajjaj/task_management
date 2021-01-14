  import firebase from 'firebase';
  
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCb6HMIFEK5pt4X9YrYQIGwRLAVrpBECvQ",
    authDomain: "login-951a6.firebaseapp.com",
    projectId: "login-951a6",
    storageBucket: "login-951a6.appspot.com",
    messagingSenderId: "427433853816",
    appId: "1:427433853816:web:65b000cdeaccd2c82ffe8d"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;