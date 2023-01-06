import { createAsyncThunk } from "@reduxjs/toolkit";

export const createCarouselThunk = createAsyncThunk(
  "carousels/addCarousel",
  async (workoutId, { getState, dispatch }) => {
    const id = workoutId;

    const cardId = await dispatch(addCardThunk(id));

    dispatch(addCarousel({ id, cardIds: [cardId] }));
    return id;
  }
);