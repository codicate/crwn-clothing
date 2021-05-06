
import {
  createSlice, createDraftSafeSelector, createAsyncThunk,
  PayloadAction
} from '@reduxjs/toolkit';
import { RootState } from 'app/store';

import firebase, { createAuthUserDoc, User } from 'utils/firebase';


const initialState: {
  status: 'idle' | 'loading' | 'succeed' | 'failed';
  currentUser: User;
} = {
  status: 'idle',
  currentUser: null
};


export const setCurrentUser = createAsyncThunk(
  'user/userSignin',

  async (newUser: firebase.User | null, { rejectWithValue }) => {
    try {
      if (!newUser) return null;

      const userRef = await createAuthUserDoc(newUser);
      const userSnapShot = await userRef.get();

      return {
        id: userSnapShot.id,
        ...userSnapShot.data()
      };

    } catch (err) {
      console.error(err);
      return rejectWithValue(err.response.data);
    }
  }
);


const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(
      setCurrentUser.pending,
      (state) => {
        state.status = 'loading';
      }
    ).addCase(
      setCurrentUser.fulfilled,
      (state, action: PayloadAction<User>) => {
        state.status = 'succeed';
        state.currentUser = action.payload;
        console.log('user updated in redux', action.payload);
      }
    ).addCase(
      setCurrentUser.rejected,
      (state) => {
        state.status = 'failed';
      }
    );
  },
});

export default userSlice.reducer;


const selectSelf = (state: RootState) => state.user;

export const selectUserSigninStatus = createDraftSafeSelector(
  selectSelf,
  (user) => user.status
);

export const selectCurrentUser = createDraftSafeSelector(
  selectSelf,
  (user) => user.currentUser
);









