import { createAsyncThunk } from "@reduxjs/toolkit";
import { carouselsActions, addCardThunk, deleteCardThunk } from "../index";

export const addCarouselThunk = createAsyncThunk(
  "carousels/addCarousel",
  async (id, { getState, dispatch }) => {
    const { payload: cardId } = await dispatch(addCardThunk());

    await dispatch(carouselsActions.addCarousel({ id, cardId }));
  }
);

export const deleteCarouselThunk = createAsyncThunk(
  "carousels/deleteCarousel",
  async (id, { getState, dispatch }) => {
    const state = getState().reducer.carousels;

    for (let i = 0; i < state.data[id].length; i++) {
      await dispatch(deleteCardFromCarouselThunk({ id, i }));
    }

    await dispatch(carouselsActions.deleteCarousel(id));
  }
);

export const addCardToCarouselThunk = createAsyncThunk(
  "cards/addCardToCarousel",
  async (id, { getState, dispatch }) => {
    const { payload: cardId } = await dispatch(addCardThunk());

    await dispatch(carouselsActions.addCardToCarousel({ id, cardId }));
  }
);

export const deleteCardFromCarouselThunk = createAsyncThunk(
  "cards/deleteCardFromCarousel",
  async ({ id, i }, { getState, dispatch }) => {
    const state = getState().reducer.carousels;

    await dispatch(deleteCardThunk(state.data[id][i]));

    await dispatch(carouselsActions.deleteCardFromCarousel({ id, i }));
  }
);
