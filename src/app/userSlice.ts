import { createSlice } from '@reduxjs/toolkit';
import firebase from 'firebase/app';

import { RootState } from 'app/store';

export interface User {
  currentUser: { id: string; } | firebase.User | null;
}

const initialState: User = {
  currentUser: null
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    }
  }
});

export const selectCurrentUser = (state: RootState) => state.user.currentUser;

export const {
  setCurrentUser
} = userSlice.actions;
export default userSlice.reducer;