import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCgmHzAbTzKE6OCCOlFRc9DF_kactfXNCQ",
  authDomain: "fitness-app-98135.firebaseapp.com",
  databaseURL: "https://fitness-app-98135.firebaseio.com",
  projectId: "fitness-app-98135",
  storageBucket: "",
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;