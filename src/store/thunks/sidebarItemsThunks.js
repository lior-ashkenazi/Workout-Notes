import { createAsyncThunk } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

import { sidebarItemsActions, addCarouselThunk } from "../index";

export const addSidebarItemThunk = createAsyncThunk(
  "sidebarItems/addSidebarItem",
  async (_, { getState, dispatch }) => {
    const id = uuidv4();

    dispatch(sidebarItemsActions.addSidebarItem(id));

    dispatch(addCarouselThunk(id));
  }
);
