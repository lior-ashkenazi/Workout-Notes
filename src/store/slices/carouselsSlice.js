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
    deleteCarousel(state, action) {
      const id = action.payload;
      delete state.data[id];
    },
    addCardToCarousel(state, action) {
      const { id, cardId } = action.payload;
      state.data[id].push(cardId);
    },
    deleteCardFromCarousel(state, action) {
      const { id, i } = action.payload;
      state.data[id].splice(i, 1);
    },
  },
});

export const { reducer, actions } = carouselsSlice;
