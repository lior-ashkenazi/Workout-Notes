import { v4 as uuidv4 } from "uuid";

import {
  sidebarItemsActions,
  addCarouselThunk,
  deleteCarouselThunk,
} from "../index";

export const addSidebarItemThunk = ({ getState, dispatch }) => {
  const id = uuidv4();

  addCarouselThunk(id, { getState, dispatch });

  dispatch(sidebarItemsActions.addSidebarItem(id));

  return id;
};

export const deleteSidebarItemThunk = (id, { getState, dispatch }) => {
  deleteCarouselThunk(id, { getState, dispatch });

  dispatch(sidebarItemsActions.deleteSidebarItem(id));
};
