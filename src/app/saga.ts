import { takeEvery } from "redux-saga/effects";

import { setCollections } from 'app/inventorySlice';

import { firestore } from 'utils/firebase';
import firebase from 'firebase';


export function* fetchCollectionsAsync() {
  const collectionRef = firestore.collection('inventory');

  try {
    const snapshot: firebase.firestore.QuerySnapshot<firebase.firestore.DocumentData> = yield collectionRef.get();

    const inventoryData = snapshot.docs.map((doc) => {
      const { title, items } = doc.data();

      return {
        title,
        items,
        id: doc.id,
        routeName: encodeURI(title.toLowerCase())
      };
    });

    return inventoryData;
  } catch (err) {
    return err.response.data;
  }
}

export function* fetchCollections() {
  yield takeEvery(setCollections.type, fetchCollectionsAsync);
}

export default function* rootSaga() {

}