import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const sidebarItemsSlice = createSlice({
  name: "workouts",
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
