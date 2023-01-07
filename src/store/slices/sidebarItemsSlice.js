import { createSlice } from "@reduxjs/toolkit";

const sidebarItemsSlice = createSlice({
  name: "sidebarItems",
  initialState: {
    data: [],
  },
  reducers: {
    addSidebarItem(state, action) {
      state.data.push(action.payload);
    },
    // addWorkout: {
    //   reducer(state, action) {
    //     state.data.push(action.payload);
    //   },
    // prepare(workout) {
    //   return { payload: { ...workout, id: uuidv4() } };
    // },
    // },
    updateSidebarItems(state, action) {
      state.data = action.payload;
    },
    // TODO should be in the extraReducer
    deleteSidebarItem(state, action) {
      state.data.splice(action.payload, 1);
    },
  },
});

export const { reducer, actions } = sidebarItemsSlice;
