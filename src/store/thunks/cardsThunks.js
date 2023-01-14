import { v4 as uuidv4 } from "uuid";

import { cardsActions, addCardItemThunk, deleteCardItemThunk } from "../index";

export const addCardThunk = ({ getState, dispatch }) => {
  const id = uuidv4();

  const cardItemId = addCardItemThunk({ getState, dispatch });

  dispatch(cardsActions.addCard({ id, cardItemId }));

  return id;
};

export const addCardItemToCardThunk = ({ id, i }, { getState, dispatch }) => {
  const cardItemId = addCardItemThunk({ getState, dispatch });

  dispatch(cardsActions.addCardItemToCard({ id, i, cardItemId }));
};

export const deleteCardThunk = (id, { getState, dispatch }) => {
  const state = getState.reducer.cards;

  for (let i = 0; i < state.data[id].cardItemsId.length; i++) {
    deleteCardItemFromCardThunk({ id, i }, { getState, dispatch });
  }

  dispatch(cardsActions.deleteCard(id));

  return id;
};

export const deleteCardItemFromCardThunk = (
  { id, i },
  { getState, dispatch }
) => {
  const state = getState.reducer.cards;

  deleteCardItemThunk(state.data[id].cardItemsId[i], { getState, dispatch });

  dispatch(cardsActions.deleteCardItemFromCard({ id, i }));
};
