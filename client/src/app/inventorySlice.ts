import {
  createSlice, createAsyncThunk, createDraftSafeSelector,
  PayloadAction,
} from '@reduxjs/toolkit';
import { RootState } from 'app/store';

import { firestore } from 'utils/firebase';
import { Item } from 'app/cartSlice';


export interface Collection {
  id: string;
  title: string;
  routeName: string;
  items: Item[];
}

const initialState: {
  status: 'idle' | 'loading' | 'succeed' | 'failed';
  collections: Collection[];
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
      console.error(err);
      return rejectWithValue(err.response.data);
    }
  }
);


const inventorySlice = createSlice({
  name: 'inventory',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchCollections.pending,
      (state) => {
        state.status = 'loading';
      }
    ).addCase(
      fetchCollections.fulfilled,
      (state, action: PayloadAction<Collection[]>) => {
        state.status = 'succeed';
        state.collections = action.payload;
      }
    ).addCase(
      fetchCollections.rejected,
      (state) => {
        state.status = 'failed';
      }
    );
  },
});

export default inventorySlice.reducer;


const selectSelf = (state: RootState) => state.inventory;

export const selectFetchCollectionsStatus = createDraftSafeSelector(
  selectSelf,
  (inventory) => inventory.status
);

export const selectCollections = createDraftSafeSelector(
  selectSelf,
  (inventory) => inventory.collections
);