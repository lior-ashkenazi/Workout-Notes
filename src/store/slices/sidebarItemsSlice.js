import { createSlice } from "@reduxjs/toolkit";

const sidebarItemsSlice = createSlice({
  name: "sidebarItems",
  initialState: {
    data: {},
  },
  reducers: {
    addSidebarItem(state, action) {
      const id = action.payload;
      state.data[id] = { text: "", editable: true };
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
      const { id, info } = action.payload;
      console.log("shimon");
      console.log(info);
      state.data[id] = info;
    },
    // // TODO should be in the extraReducer
    // deleteSidebarItem(state, action) {
    //   state.data.splice(action.payload, 1);
    // },
  },
});

export const { reducer, actions } = sidebarItemsSlice;
