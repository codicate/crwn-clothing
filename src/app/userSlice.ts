import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import firebase from 'firebase/app';

import { RootState } from 'app/store';

type User = { id: string; } | firebase.User | null;


const initialState: {
  currentUser: User
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

export const selectCurrentUser = (state: RootState) => state.user.currentUser;

export const {
  setCurrentUser
} = userSlice.actions;
export default userSlice.reducer;