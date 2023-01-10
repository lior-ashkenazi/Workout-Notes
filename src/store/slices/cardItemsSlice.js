import { createSlice } from "@reduxjs/toolkit";

const cardItemsSlice = createSlice({
  name: "cardItems",
  initialState: {
    data: {},
  },
  reducers: {
    addCardItem(state, action) {
      const id = action.payload;
      state.data[id] = {
        name: "",
        sets: "",
        reps: "",
        techniqueUrl: "",
        editable: true,
      };
    },
    updateCardItem(state, action) {
      const { id, info } = action.payload;
      state.data[id] = info;
    },
    deleteCardItem(state, action) {
      const id = action.payload;
      delete state.data[id];
    },
  },
});

export const { reducer, actions } = cardItemsSlice;
