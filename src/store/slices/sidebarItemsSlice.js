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
    updateSidebarItem(state, action) {
      const { id, info } = action.payload;
      console.log("shimon");
      console.log(info);
      state.data[id] = info;
    },
    deleteSidebarItem(state, action) {
      const id = action.payload;
      delete state.data[id];
    },
  },
});

export const { reducer, actions } = sidebarItemsSlice;
