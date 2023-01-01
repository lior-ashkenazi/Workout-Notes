import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const workoutsSlice = createSlice({
  name: "workouts",
  initialState: {
    data: [],
  },
  reducers: {
    // addWorkout(state, action) {
    //   state.data.push(action.payload);
    // },
    addWorkout: {
      reducer(state, action) {
        state.data.push(action.payload);
      },
      prepare(workout) {
        return { payload: { ...workout, id: uuidv4() } };
      },
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
