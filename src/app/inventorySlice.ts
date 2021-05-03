import {
  createSlice, createDraftSafeSelector, PayloadAction
} from '@reduxjs/toolkit';
import { RootState } from 'app/store';

import { takeLatest, call, put, SagaReturnType } from "redux-saga/effects";
import { firestore } from 'utils/firebase';
import { Item } from 'app/cartSlice';


interface Collection {
  id: string;
  title: string;
  routeName: string;
  items: Item[];
}

const initialState: {
  status: 'idle' | 'loading' | 'success' | 'failed';
  collections: Collection[];
} = {
  status: 'idle',
  collections: []
};

const inventorySlice = createSlice({
  name: 'inventory',
  initialState,
  reducers: {
    fetchCollections: (state) => {
      state.status = 'loading';
    },
    setCollections: (state, action: PayloadAction<Collection[]>) => {
      state.collections = action.payload;
      state.status = 'success';
    },
    setCollectionsFailed: (state) => {
      state.status = 'failed';
    }
  }
});

export default inventorySlice.reducer;
export const {
  fetchCollections, setCollections
} = inventorySlice.actions;


const selectSelf = (state: RootState) => state.inventory;

export const selectInventoryStatus = createDraftSafeSelector(
  selectSelf,
  (inventory) => inventory.status
);

export const selectInventoryCollections = createDraftSafeSelector(
  selectSelf,
  (inventory) => inventory.collections
);


export function* fetchCollectionsSage() {
  yield takeLatest(fetchCollections.type, fetchCollectionsFromFirebase);
}

function* fetchCollectionsFromFirebase() {
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