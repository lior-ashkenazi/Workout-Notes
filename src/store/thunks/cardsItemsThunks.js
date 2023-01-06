import { createAsyncThunk } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

import { actions } from "../slices/cardItemsSlice";

export const addCardItemThunk = createAsyncThunk(
  "cardItems/addCardItem",
  async (_, { getState, dispatch }) => {
    const id = uuidv4();

    dispatch(actions.addCardItem(id));

    return id;
  }
);
