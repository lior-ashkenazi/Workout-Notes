import { createAsyncThunk } from "@reduxjs/toolkit";
import { carouselsActions, addCardThunk } from "../index";

export const addCarouselThunk = createAsyncThunk(
  "carousels/addCarousel",
  async (id, { getState, dispatch }) => {
    const { payload: cardId } = await dispatch(addCardThunk());

    dispatch(carouselsActions.addCarousel({ id, cardId }));
  }
);

export const addCardToCarouselThunk = createAsyncThunk(
  "cards/addCardToCarousel",
  async (id, { getState, dispatch }) => {
    const { payload: cardId } = await dispatch(addCardThunk());

    dispatch(carouselsActions.addCardToCarousel({ id, cardId }));
  }
);
