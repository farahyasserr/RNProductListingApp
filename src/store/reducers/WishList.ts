import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Product from '../../types/Product';

interface WishlistState {
  items: Product[];
}

const initialState: WishlistState = {
  items: [],
};

export const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Product>) => {
      state.items = state.items.concat([action.payload]);
    },
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