// Core
import { createSlice } from "@reduxjs/toolkit";

const priceSlice = createSlice({
  name: "price",

  initialState: {
    value:0
  },

  reducers: {
    setPrice:(state,action) => {
        state.price = action.payload
    }
  },
});

// Exports actions
export const { setPrice} = priceSlice.actions;
// Exports selector
export const selectPrice = state => state.price.price
// Exports reducer
export default priceSlice.reducer;