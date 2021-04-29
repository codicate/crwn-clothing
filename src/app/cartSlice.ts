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
    addItem: (state, action: PayloadAction<Item>) => {
      const existingItem = state.cartItems.find((cartItem) =>
        cartItem.id === action.payload.id
      );

      existingItem
        ? existingItem.quantity += 1
        : state.cartItems.push({ ...action.payload, quantity: 1 });
    },
    removeItem: (state, action: PayloadAction<Item>) => {
      state.cartItems = state.cartItems.filter((cartItem) =>
        cartItem.id !== action.payload.id
      );
    }
  }
});

const selectSelf = (state: RootState) => state.cart;

export const selectCartItems = createDraftSafeSelector(selectSelf, (cart) =>
  cart.cartItems
);

export const selectCartTotalQuantity = createDraftSafeSelector(selectSelf, (cart) =>
  cart.cartItems.reduce((totalQuantity, item) => {
    return totalQuantity += item.quantity;
  }, 0)
);

export const selectCartTotalPrice = createDraftSafeSelector(selectSelf, (cart) =>
  cart.cartItems.reduce((totalPrice, item) => {
    return totalPrice += item.price * item.quantity;
  }, 0)
);

export const {
  addItem, removeItem
} = cartSlice.actions;
export default cartSlice.reducer;