
import {
  createSlice, createDraftSafeSelector, createAsyncThunk,
  PayloadAction
} from '@reduxjs/toolkit';
import { RootState } from 'app/store';

import firebase, { createAuthUserDoc, auth, User } from 'utils/firebase';


const initialState: {
  status: 'idle' | 'loading' | 'succeed' | 'failed';
  currentUser: User;
} = {
  status: 'idle',
  currentUser: null
};


export const userSignin = createAsyncThunk(
  'user/userSignin',

  async (_, { rejectWithValue }) => {
    try {
      const newUser = await new Promise<firebase.User>((res, rej) => {
        const unsubFromAuth = auth.onAuthStateChanged(newUser => {
          unsubFromAuth();
          newUser && res(newUser);
        }, rej);
      });

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
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      userSignin.pending,
      (state) => {
        state.status = 'loading';
      }
    ).addCase(
      userSignin.fulfilled,
      (state, action: PayloadAction<User>) => {
        state.status = 'succeed';
        state.currentUser = action.payload;
      }
    ).addCase(
      userSignin.rejected,
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









