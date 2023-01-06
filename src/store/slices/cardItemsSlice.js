import { createSlice } from "@reduxjs/toolkit";

const cardItemsSlice = createSlice({
  name: "cardItems",
  initialState: {
    data: {},
  },
  reducers: {
    addCardItem(state, action) {
      const id = action.payload;
      state.data[id] = {};
    },
    updateCardItem(state, action) {
      const { id, info } = action.payload;
      state.data[id] = info;
    },
  },
});

export const { reducer, actions } = cardItemsSlice;
