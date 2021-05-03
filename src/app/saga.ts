import { all } from "redux-saga/effects";

import { fetchCollectionsSage } from 'app/inventorySlice';

export default function* rootSaga() {
  yield all([
    fetchCollectionsSage()
  ]);
}