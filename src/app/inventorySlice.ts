import {
  createSlice, createDraftSafeSelector, PayloadAction
} from '@reduxjs/toolkit';
import { RootState } from 'app/store';

import { Item } from 'app/cartSlice';


interface Inventory {
  id: string;
  title: string;
  routeName: string;
  items: Item[];
}

const initialState: {
  status: 'idle' | 'loading' | 'failed';
  collections: Inventory[];
} = {
  status: 'idle',
  collections: []
};

const inventorySlice = createSlice({
  name: 'inventory',
  initialState,
  reducers: {
    setCollections: (state) => {

    }
  }
});

export default inventorySlice.reducer;
export const {
  setCollections
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