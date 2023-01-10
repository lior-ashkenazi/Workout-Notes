import { createAsyncThunk } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

import { cardItemsActions } from "../index";

export const addCardItemThunk = createAsyncThunk(
  "cardItems/addCardItem",
  async (_, { getState, dispatch }) => {
    const id = uuidv4();

    await dispatch(cardItemsActions.addCardItem(id));

    return id;
  }
);

export const deleteCardItemThunk = createAsyncThunk(
  "cardItems/deleteCardItem",
  async (id, { getState, dispatch }) => {
    await dispatch(cardItemsActions.deleteCardItem(id));
    console.log("hello again");

    return id;
  }
);
