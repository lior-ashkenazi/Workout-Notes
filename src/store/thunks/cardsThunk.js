import {createAsyncThunk} from "@reduxjs/toolkit";
import {v4 as uuidv4} from "uuid";

export const addCardThunk = createAsyncThunk(
    "cards/addCard",
    async (carouselId, {getState, dispatch}) => {
        const id = uuidv4();

        dispatch(addCard({id, carouselId, itemsIds: []}));

        const cardItemId = await dispatch(createCardItemThunk());

        dispatch(addItemToCard({cardId: id, itemId}))

        return id;
    }
);