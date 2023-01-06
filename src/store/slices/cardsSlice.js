import { createSlice } from "@reduxjs/toolkit";

const cardsSlice = createSlice({
  name: "cards",
  initialState: {
    data: {},
  },
  reducers: {
    addCard(state, action) {
      const id = action.payload;
      state.data[id] = [];
    },
    addCardItemToCard(state, action) {
      const { id, cardItemId } = action.payload;
      state.data[id].push(cardItemId);
    },
  },
});

export const { reducer, actions } = cardsSlice;
