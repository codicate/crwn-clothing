import { createSlice, createDraftSafeSelector, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'app/store';

export interface Item {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  quantity?: number;
}

const getExistingItem = (cartItems: Item[], itemId: number) => {
  return cartItems.find((cartItem) =>
    cartItem.id === itemId
  );
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: [] as Item[],
  reducers: {
    addItemByOne: (state, action: PayloadAction<Item>) => {
      const existingItem = getExistingItem(state, action.payload.id);

      (existingItem?.quantity)
        ? existingItem.quantity += 1
        : state.push({ ...action.payload, quantity: 1 });
    },

    removeItemByOne: (state, action: PayloadAction<Item>) => {
      const existingItem = getExistingItem(state, action.payload.id);

      (existingItem?.quantity) && (
        (existingItem.quantity > 1)
          ? existingItem.quantity -= 1
          : state.splice(state.indexOf(existingItem), 1)
      );
    },

    removeAllItem: (state, action: PayloadAction<Item>) => {
      state.splice(state.indexOf(action.payload), 1);
    }
  }
});

export const {
  addItemByOne, removeItemByOne, removeAllItem
} = cartSlice.actions;
export default cartSlice.reducer;


const selectSelf = (state: RootState) => state.cart;

export const selectCartItems = createDraftSafeSelector(selectSelf, (cart) => cart);

export const selectCartTotalQuantity = createDraftSafeSelector(selectSelf, (cart) =>
  cart.reduce((totalQuantity, item) =>
    totalQuantity += (item?.quantity || 0)
    , 0)
);

export const selectCartTotalPrice = createDraftSafeSelector(selectSelf, (cart) =>
  cart.reduce((totalPrice, item) =>
    totalPrice += item.price * (item?.quantity || 1)
    , 0)
);