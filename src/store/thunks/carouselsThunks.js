import { createAsyncThunk } from "@reduxjs/toolkit";
import { actions } from "../slices/carouselsSlice";
import { addCardThunk } from "./cardsThunks";
import { addCardItemThunk } from "./cardsItemsThunks";

export const addCarouselThunk = createAsyncThunk(
  "carousels/addCarousel",
  async (id, { getState, dispatch }) => {
    const { payload: cardId } = await dispatch(addCardThunk());

    dispatch(actions.addCarousel({ id, cardId }));
  }
);

export const addCardToCarouselThunk = createAsyncThunk(
  "cards/addCardToCarousel",
  async (id, { getState, dispatch }) => {
    const { payload: cardId } = await dispatch(addCardThunk());

    dispatch(actions.addCardToCarousel({ id, cardId }));
  }
);
