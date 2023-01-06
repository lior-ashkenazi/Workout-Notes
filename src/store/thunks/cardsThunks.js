import { createAsyncThunk } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

import { actions } from "../slices/cardsSlice";
import { addCardItemThunk } from "./cardsItemsThunks";

export const addCardThunk = createAsyncThunk(
  "cards/addCard",
  async (_, { getState, dispatch }) => {
    const id = uuidv4();

    const cardItemId = dispatch(addCardItemThunk());

    dispatch(actions.addCard({ id, cardItemId }));

    return id;
  }
);
