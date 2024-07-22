import { configureStore } from "@reduxjs/toolkit";
import dessertSlice from "../features/dessert/dessertSlice";
export const store = configureStore({
  reducer: {
    dessert: dessertSlice,
  },
});
