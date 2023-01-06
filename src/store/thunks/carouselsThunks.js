import { createAsyncThunk } from "@reduxjs/toolkit";
import { actions } from "../slices/carouselsSlice";
import { addCardThunk } from "./cardsThunks";

export const addCarouselThunk = createAsyncThunk(
  "carousels/addCarousel",
  (id, { getState, dispatch }) => {
    const cardId = dispatch(addCardThunk());

    dispatch(actions.addCarousel({ id, cardId }));
  }
);
