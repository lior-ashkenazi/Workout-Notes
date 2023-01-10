import {createAsyncThunk} from "@reduxjs/toolkit";
import {v4 as uuidv4} from "uuid";

import {
    sidebarItemsActions,
    addCarouselThunk,
    deleteCarouselThunk,
} from "../index";

export const addSidebarItemThunk = createAsyncThunk(
    "sidebarItems/addSidebarItem",
    async (_, {getState, dispatch}) => {
        const id = uuidv4();

        await dispatch(addCarouselThunk(id));

        await dispatch(sidebarItemsActions.addSidebarItem(id));

        return id
    }
);

export const deleteSidebarItemThunk = createAsyncThunk(
    "sidebarItems/deleteSidebarItem",
    async (id, {getState, dispatch}) => {
        await dispatch(deleteCarouselThunk(id));

        await dispatch(sidebarItemsActions.deleteSidebarItem(id));
    }
);
