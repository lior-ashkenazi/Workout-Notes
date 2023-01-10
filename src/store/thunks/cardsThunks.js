import {createAsyncThunk} from "@reduxjs/toolkit";
import {v4 as uuidv4} from "uuid";

import {cardsActions, addCardItemThunk, deleteCardItemThunk} from "../index";

export const addCardThunk = createAsyncThunk(
    "cards/addCard",
    async (_, {getState, dispatch}) => {
        const id = uuidv4();

        const {payload: cardItemId} = await dispatch(addCardItemThunk());

        await dispatch(cardsActions.addCard({id, cardItemId}));

        return id;
    }
);

export const addCardItemToCardThunk = createAsyncThunk(
    "cards/addCardItemToCard",
    async ({id, i}, {getState, dispatch}) => {
        const {payload: cardItemId} = await dispatch(addCardItemThunk());

        await dispatch(cardsActions.addCardItemToCard({id, i, cardItemId}));
    }
);

export const deleteCardThunk = createAsyncThunk(
    "cards/deleteCard",
    async (id, {getState, dispatch}) => {
        const state = getState().reducer.cards;

        for (let i = 0; i < state.data[id].cardItemsId.length; i++) {
            await dispatch(deleteCardItemFromCardThunk({id, i}));
        }

        await dispatch(cardsActions.deleteCard(id));

        return id;
    }
);

export const deleteCardItemFromCardThunk = createAsyncThunk(
    "cards/deleteCardItemFromCard",
    async ({id, i}, {getState, dispatch}) => {
        const state = getState().reducer.cards;
        console.log("when?");

        await dispatch(deleteCardItemThunk(state.data[id].cardItemsId[i]));

        console.log("jimmybutler");
        await dispatch(cardsActions.deleteCardItemFromCard({id, i}));
    }
);
