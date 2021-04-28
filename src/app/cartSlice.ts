import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from 'app/store';


const initialState: {
  cartItems: string[];
} = {
  cartItems: []
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCartItems: (state, action: PayloadAction<string>) => {
      state.cartItems = [...state.cartItems, action.payload];
    }
  }
});

export const selectCartItems = (state: RootState) => state.cart.cartItems;

export const {
  setCartItems
} = cartSlice.actions;
export default cartSlice.reducer;