import { createSlice } from '@reduxjs/toolkit';
import firebase from 'firebase/app';

export interface User {
  user: null | firebase.User;
}

const initialState: User = {
  user: null
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    }
  }
});

export const {
  setUser
} = userSlice.actions;
export default userSlice.reducer;