import { createSlice, createDraftSafeSelector, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'app/store';

import { User } from 'utils/firebase';


const userSlice = createSlice({
  name: 'user',
  initialState: null as User,
  reducers: {
    setCurrentUser: (state, action: PayloadAction<User>) => {
      state = action.payload;
    }
  }
});

const selectSelf = (state: RootState) => state.user;

export const selectCurrentUser = createDraftSafeSelector(selectSelf, (user) => user);

export const {
  setCurrentUser
} = userSlice.actions;
export default userSlice.reducer;