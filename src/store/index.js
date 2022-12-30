import { configureStore } from "@reduxjs/toolkit";
import {
  reducer as workoutsReducer,
  actions as workoutsActions,
} from "./slices/workoutsSlice";

export const store = configureStore({
  reducer: {
    workouts: workoutsReducer,
  },
});

export { workoutsActions };
