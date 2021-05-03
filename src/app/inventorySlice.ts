import {
  createSlice, createDraftSafeSelector, PayloadAction
} from '@reduxjs/toolkit';
import { RootState } from 'app/store';

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