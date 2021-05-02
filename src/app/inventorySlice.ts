import { createSlice, createAsyncThunk, createDraftSafeSelector } from '@reduxjs/toolkit';
import { RootState } from 'app/store';

import { firestore } from 'utils/firebase';
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

export const fetchCollections = createAsyncThunk(
  'inventory/fetchCollections',
  async (_, { rejectWithValue }) => {
    const collectionRef = firestore.collection('inventory');

    try {
      const snapshot = await collectionRef.get();

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
      return rejectWithValue(err.response.data);
    }
  }
);

const inventorySlice = createSlice({
  name: 'inventory',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCollections.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCollections.fulfilled, (state, action) => {
        state.status = 'idle';
        state.collections = action.payload;
      });
  },
});

export default inventorySlice.reducer;

const selectSelf = (state: RootState) => state.inventory;

export const selectInventoryStatus = createDraftSafeSelector(
  selectSelf,
  (inventory) => inventory.status
);

export const selectInventoryCollections = createDraftSafeSelector(
  selectSelf,
  (inventory) => inventory.collections
);