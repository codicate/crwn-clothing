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
  quantity?: number;
}

const initialState: {
  cartItems: Item[];
} = {
  cartItems: []
};


const getExistingItem = (cartItems: Item[], itemId: number) => {
  return cartItems.find((cartItem) =>
    cartItem.id === itemId
  );
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemByOne: (state, action: PayloadAction<Item>) => {
      const existingItem = getExistingItem(state.cartItems, action.payload.id);

      (existingItem?.quantity)
        ? existingItem.quantity += 1
        : state.cartItems.push({ ...action.payload, quantity: 1 });
    },

    removeItemByOne: (state, action: PayloadAction<Item>) => {
      const existingItem = getExistingItem(state.cartItems, action.payload.id);

      (existingItem?.quantity) && (
        (existingItem.quantity > 1)
          ? existingItem.quantity -= 1
          : state.cartItems.splice(state.cartItems.indexOf(existingItem), 1)
      );
    },

    removeAllItem: (state, action: PayloadAction<Item>) => {
      state.cartItems.splice(state.cartItems.indexOf(action.payload), 1);
    }
  }
});

export const {
  addItemByOne, removeItemByOne, removeAllItem
} = cartSlice.actions;
export default cartSlice.reducer;


const selectSelf = (state: RootState) => state.cart;

export const selectCartItems = createDraftSafeSelector(selectSelf, (cart) => {
  console.log('cartItems');
  return cart.cartItems;
});

export const selectCartTotalQuantity = createDraftSafeSelector(selectSelf, (cart) =>
  cart.cartItems.reduce((totalQuantity, item) => {
    return totalQuantity += (item?.quantity || 0);
  }, 0)
);

export const selectCartTotalPrice = createDraftSafeSelector(selectSelf, (cart) =>
  cart.cartItems.reduce((totalPrice, item) => {
    return totalPrice += item.price * (item?.quantity || 1);
  }, 0)
);