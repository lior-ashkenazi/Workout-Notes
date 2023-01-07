import { createAsyncThunk } from "@reduxjs/toolkit";
import { actions } from "../slices/carouselsSlice";
import { addCardThunk } from "./cardsThunks";

export const addCarouselThunk = createAsyncThunk(
  "carousels/addCarousel",
  async (id, { getState, dispatch }) => {
    const { payload: cardId } = await dispatch(addCardThunk());

    dispatch(actions.addCarousel({ id, cardId }));
  }
);
