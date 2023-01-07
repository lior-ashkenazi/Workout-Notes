import { createAsyncThunk } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

import { actions } from "../slices/sidebarItemsSlice";
import { addCarouselThunk } from "./carouselsThunks";

export const addSidebarItemThunk = createAsyncThunk(
  "sidebarItems/addSidebarItem",
  async (_, { getState, dispatch }) => {
    const id = uuidv4();

    dispatch(actions.addSidebarItem(id));

    dispatch(addCarouselThunk(id));
  }
);
