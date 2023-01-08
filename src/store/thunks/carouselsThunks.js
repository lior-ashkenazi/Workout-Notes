import { createAsyncThunk } from "@reduxjs/toolkit";
import { carouselsActions, addCardThunk, deleteCardThunk } from "../index";

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

export const deleteCardFromCarouselThunk = createAsyncThunk(
  "cards/addCardToCarousel",
  async ({ id, i }, { getState, dispatch }) => {
    console.log("step2");
    const state = getState().reducer.carousels;

    dispatch(deleteCardThunk(state.data[id][i]));

    dispatch(carouselsActions.deleteCardFromCarousel({ id, i }));
  }
);
