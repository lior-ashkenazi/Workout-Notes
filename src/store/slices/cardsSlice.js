import { createSlice } from "@reduxjs/toolkit";

const cardsSlice = createSlice({
  name: "cards",
  initialState: {
    data: {},
  },
  reducers: {
    addCard(state, action) {
      const { id, cardItemId } = action.payload;
      state.data[id] = {
        title: { text: "", editable: true },
        cardItemsId: [cardItemId],
      };
    },
    addCardItemToCard(state, action) {
      const { id, i, cardItemId } = action.payload;
      state.data[id].cardItemsId.splice(i + 1, 0, cardItemId);
    },
    updateCardTitle(state, action) {
      const { id, info } = action.payload;
      state.data[id].title = info;
    },
  },
});

export const { reducer, actions } = cardsSlice;
