import { useState, useEffect } from 'react';

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

export default firebase;
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth
  .GoogleAuthProvider()
  .setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);


export const createAuthUserDoc = async (
  user: firebase.User,
  data?: {}
) => {
  if (!user) return;

  const userRef = firestore.doc(`users/${user.uid}`);
  const userSnapShot = await userRef.get();

  if (!userSnapShot.exists) {
    const { displayName, email } = user;
    const joinedAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        joinedAt,
        ...data
      });
    } catch (err) {
      console.error('Error creating user:', err.message);
    }
  }

  return userRef;
};


export type User = firebase.User | { id: string; } | null;

export const useAuthUser = () => {
  const [user, setUser] = useState<User>(null);

  useEffect(() => {
    const unsubFromAuth = auth.onAuthStateChanged(async newUser => {
      if (newUser) {
        const userRef = await createAuthUserDoc(newUser);

        userRef && userRef.onSnapshot(userSnapShot => {
          setUser({
            id: userSnapShot.id,
            ...userSnapShot.data()
          });
        });
      }

      setUser(newUser);
    });
    return () => unsubFromAuth();
  }, []);

  return user;
};

export const addCollection = async (collectionPath: string, objectArr: {}[]) => {
  const collectionRef = firestore.collection(collectionPath);

  const batch = firestore.batch();
  objectArr.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};