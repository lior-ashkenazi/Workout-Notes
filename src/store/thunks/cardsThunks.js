import { createAsyncThunk } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

import { cardsActions, addCardItemThunk, deleteCardItemThunk } from "../index";

export const addCardThunk = createAsyncThunk(
  "cards/addCard",
  async (_, { getState, dispatch }) => {
    const id = uuidv4();

    const { payload: cardItemId } = await dispatch(addCardItemThunk());

    dispatch(cardsActions.addCard({ id, cardItemId }));

    return id;
  }
);

export const addCardItemToCardThunk = createAsyncThunk(
  "cards/addCardItemToCard",
  async ({ id, i }, { getState, dispatch }) => {
    const { payload: cardItemId } = await dispatch(addCardItemThunk());

    dispatch(cardsActions.addCardItemToCard({ id, i, cardItemId }));
  }
);

export const deleteCardItemFromCardThunk = createAsyncThunk(
  "cards/addCardItemToCard",
  async ({ id, i, cardItemId }, { getState, dispatch }) => {
    dispatch(deleteCardItemThunk(cardItemId));

    dispatch(cardsActions.deleteCardItemToCard({ id, i }));
  }
);
