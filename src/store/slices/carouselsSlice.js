import { createSlice } from "@reduxjs/toolkit";

const carouselsSlice = createSlice({
  name: "carousels",
  initialState: {
    data: {},
  },
  reducers: {
    addCarousel(state, action) {
      const { id, cardId } = action.payload;
      state.data[id] = [cardId];
    },
    addCardToCarousel(state, action) {
      const { id, cardId } = action.payload;
      state.data[id].push(cardId);
    },
  },
});

export const { reducer, actions } = carouselsSlice;
