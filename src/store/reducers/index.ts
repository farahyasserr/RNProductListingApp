import { combineReducers } from "@reduxjs/toolkit";
import { apiReducer } from "../../services";
import WishlistReducer from './WishList';

export const rootReducer = combineReducers({
    wishlist: WishlistReducer,
    //add more reducers here
    api: apiReducer, // Add apiReducer to the root reducer for RTK query
  });

// Define the root state type
export type RootState = ReturnType<typeof rootReducer>;
