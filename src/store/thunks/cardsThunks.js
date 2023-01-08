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

export const deleteCardThunk = createAsyncThunk(
  "cards/addCard",
  async (id, { getState, dispatch }) => {
    const state = getState().reducer.cards;

    state.data[id].cardItemsId.forEach((_, i) =>
      deleteCardItemFromCardThunk(id, i)
    );

    dispatch(cardsActions.deleteCard(id));

    return id;
  }
);

export const deleteCardItemFromCardThunk = createAsyncThunk(
  "cards/addCardItemToCard",
  async ({ id, i }, { getState, dispatch }) => {
    const state = getState().reducer.cards;

    dispatch(deleteCardItemThunk(state.data[id].cardItemsId[i]));

    dispatch(cardsActions.deleteCardItemFromCard({ id, i }));
  }
);
