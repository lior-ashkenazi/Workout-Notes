import { v4 as uuidv4 } from "uuid";

import { cardItemsActions } from "../index";

export const addCardItemThunk = ({ getState, dispatch }) => {
  const id = uuidv4();

  dispatch(cardItemsActions.addCardItem(id));

  return id;
};

export const deleteCardItemThunk = (id, { getState, dispatch }) => {
  dispatch(cardItemsActions.deleteCardItem(id));

  return id;
};
