import { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import { auth } from 'utils/firebase';

const useFirebaseAuthUser = () => {
  const [user, setUser] = useState<null | firebase.User>(null);

  useEffect(() => {
    const unsubFromAuth = auth.onAuthStateChanged(newUser => {
      newUser ? setUser(newUser) : setUser(null);
    });
    return () => unsubFromAuth();
  }, []);

  return user;
};

export default useFirebaseAuthUser;