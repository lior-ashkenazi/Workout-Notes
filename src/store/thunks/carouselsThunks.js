import { carouselsActions, addCardThunk, deleteCardThunk } from "../index";

export const addCarouselThunk = (id, { getState, dispatch }) => {
  const cardId = addCardThunk({ getState, dispatch });

  dispatch(carouselsActions.addCarousel({ id, cardId }));
};

export const deleteCarouselThunk = (id, { getState, dispatch }) => {
  const state = getState.reducer.carousels;

  for (let i = 0; i < state.data[id].length; i++) {
    deleteCardFromCarouselThunk({ id, i }, { getState, dispatch });
  }

  dispatch(carouselsActions.deleteCarousel(id));
};

export const addCardToCarouselThunk = (id, { getState, dispatch }) => {
  const cardId = addCardThunk({ getState, dispatch });

  dispatch(carouselsActions.addCardToCarousel({ id, cardId }));
};

export const deleteCardFromCarouselThunk = (
  { id, i },
  { getState, dispatch }
) => {
  const state = getState.reducer.carousels;

  deleteCardThunk(state.data[id][i], { getState, dispatch });

  dispatch(carouselsActions.deleteCardFromCarousel({ id, i }));
};
