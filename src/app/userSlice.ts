import { createSlice, createDraftSafeSelector, PayloadAction } from '@reduxjs/toolkit';
import firebase from 'firebase/app';

import { RootState } from 'app/store';

type User = { id: string; } | firebase.User | null;

const initialState: {
  currentUser: User;
} = {
  currentUser: null
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setCurrentUser: (state, action: PayloadAction<User>) => {
      state.currentUser = action.payload;
    }
  }
});

const selectSelf = (state: RootState) => state.user;

export const selectCurrentUser = createDraftSafeSelector(selectSelf, (user) =>
  user.currentUser
);

export const {
  setCurrentUser
} = userSlice.actions;
export default userSlice.reducer;