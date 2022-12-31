import { configureStore } from "@reduxjs/toolkit";
import {
  reducer as workoutsReducer,
  actions as workoutsActions,
} from "./slices/workoutsSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";

const persistConfig = {
  key: "root",
  storage,
};

// TODO should use combinedReducer

const persistedReducer = persistReducer(persistConfig, workoutsReducer);

export const store = configureStore({
  reducer: {
    workouts: persistedReducer,
    middleware: [thunk],
  },
});

export const persistor = persistStore(store);

export { workoutsActions };
