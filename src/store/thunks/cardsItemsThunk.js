import { createAsyncThunk } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export const addCardItemThunk = createAsyncThunk(
  "cardItems/addCardItem",
  async (cardId, item, { getState, dispatch }) => {
    const id = uuidv4();

    dispatch(addCardItem({ id, cardId, item }));

    return id;
  }
);
