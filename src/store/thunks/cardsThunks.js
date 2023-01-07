import { createAsyncThunk } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

import { actions } from "../slices/cardsSlice";
import { addCardItemThunk } from "./cardsItemsThunks";

export const addCardThunk = createAsyncThunk(
  "cards/addCard",
  async (_, { getState, dispatch }) => {
    const id = uuidv4();

    const { payload: cardItemId } = await dispatch(addCardItemThunk());

    dispatch(actions.addCard({ id, cardItemId }));

    return id;
  }
);

export const addCardItemToCardThunk = createAsyncThunk(
  "cards/addCard",
  async (id, { getState, dispatch }) => {
    const { payload: cardItemId } = await dispatch(addCardItemThunk());

    dispatch(actions.addCardItemToCard({ id, cardItemId }));
  }
);
