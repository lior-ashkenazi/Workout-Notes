import { createSlice } from "@reduxjs/toolkit";

const workoutsSlice = createSlice({
  name: "workouts",
  initialState: {
    data: [],
    nextWorkoutId: 0,
  },
  reducers: {
    addWorkout(state, action) {
      state.data.push(action.payload);
      state.nextWorkoutId += 1;
    },
    setWorkouts(state, action) {
      state.data = action.payload;
    },
    deleteWorkout(state, action) {
      state.data = state.data.filter(
        (workout) => workout.id !== action.payload
      );
    },
  },
});

export const { reducer, actions } = workoutsSlice;
