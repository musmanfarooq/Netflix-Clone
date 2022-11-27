import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCPyNTO82HWBIYGmkbx-7n_oU-s1-R9OxI",
  authDomain: "netflix-clone-b052e.firebaseapp.com",
  projectId: "netflix-clone-b052e",
  storageBucket: "netflix-clone-b052e.appspot.com",
  messagingSenderId: "9786487032",
  appId: "1:9786487032:web:8c8bedd30a238559998b0d"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { auth };
export default db;
