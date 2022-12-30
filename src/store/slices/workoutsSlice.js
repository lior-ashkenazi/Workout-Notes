import { createSlice } from "@reduxjs/toolkit";

const workoutsSlice = createSlice({
  name: "workouts",
  initialState: {
    data: [],
  },
  reducers: {
    addWorkout(state, action) {
      state.data.push(action.payload);
    },
    setWorkouts(state, action) {
      state.data = action.payload;
    },
  },
});

export const { reducer, actions } = workoutsSlice;
