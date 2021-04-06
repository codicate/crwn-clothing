import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBsoKNmQ-cKKpnjHXlejlfTcrXnBn1y3EI",
  authDomain: "codicate-e-commerce-app.firebaseapp.com",
  projectId: "codicate-e-commerce-app",
  storageBucket: "codicate-e-commerce-app.appspot.com",
  messagingSenderId: "136044037323",
  appId: "1:136044037323:web:1e822f45be5d86b518074e"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;