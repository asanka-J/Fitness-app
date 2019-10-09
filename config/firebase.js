import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
