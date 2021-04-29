import {
  createSlice, createDraftSafeSelector,
  PayloadAction, current
} from '@reduxjs/toolkit';

import { RootState } from 'app/store';

export interface Item {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}

const initialState: {
  cartItems: (Item & { quantity: number; })[];
} = {
  cartItems: []
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCartItems: (state, action: PayloadAction<Item>) => {
      const existingItem = state.cartItems.find(cartItem =>
        cartItem.id === action.payload.id
      );

      existingItem
        ? existingItem.quantity += 1
        : state.cartItems.push({ ...action.payload, quantity: 1 });

      console.table(current(state).cartItems);
    }
  }
});

const selectSelf = (state: RootState) => state.cart;

export const selectCartItems = createDraftSafeSelector(selectSelf, (cart) =>
  cart.cartItems
);

export const {
  setCartItems
} = cartSlice.actions;
export default cartSlice.reducer;