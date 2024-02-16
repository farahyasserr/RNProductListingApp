import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Product from '../../types/Product';

interface WishlistState {
  items: Product[];
}

const initialState: WishlistState = {
  items: [],
};

/* The code is creating a Redux slice using the `createSlice` function from the `@reduxjs/toolkit`
library. */
export const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
   /* The `addItem` function is a Redux reducer that is responsible for adding a new item to the
   wishlist state. It takes two parameters: `state` and `action`. */
    addItem: (state, action: PayloadAction<Product>) => {
      state.items = state.items.concat([action.payload]);
    },
    /* The `removeItem` function is a Redux reducer that is responsible for removing an item from the
    wishlist state. It takes two parameters: `state` and `action`. */
    removeItem: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
  },
  selectors: {
    selectValue: (sliceState) => sliceState.items,
  },
});

export const { addItem, removeItem } = wishlistSlice.actions;
export default wishlistSlice.reducer;