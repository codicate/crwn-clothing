import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import userReducer from 'app/userSlice';
import cartReducer from 'app/cartSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    // Might want to look into serialization later to find a way to get around this
    serializableCheck: false
  })
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
