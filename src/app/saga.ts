import { takeEvery, call, put, SagaReturnType } from "redux-saga/effects";

import { fetchCollections, setCollections } from 'app/inventorySlice';

import { firestore } from 'utils/firebase';


export function* fetchCollectionsFromFirebase() {
  const collectionRef = firestore.collection('inventory');
  type Snapshot = SagaReturnType<typeof collectionRef.get>;

  const convertSnapshotData = (snapshot: Snapshot) => snapshot.docs.map((doc) => {
    const { title, items } = doc.data();

    return {
      title,
      items,
      id: doc.id,
      routeName: encodeURI(title.toLowerCase())
    };
  });

  try {
    const snapshot: Snapshot = yield collectionRef.get();
    const inventoryData: SagaReturnType<typeof convertSnapshotData> = yield call(convertSnapshotData, snapshot);

    yield put(setCollections(inventoryData));

  } catch (err) {
    console.error(err);
    yield put(setCollections(err.response.data));
  }
}

export default function* rootSaga() {
  yield takeEvery(fetchCollections.type, fetchCollectionsFromFirebase);
}