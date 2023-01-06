import { configureStore } from "@reduxjs/toolkit";
import {
  reducer as workoutsReducer,
  actions as sidebarItemsActions,
} from "./slices/sidebarItemsSlice";
import storage from "redux-persist/lib/storage";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
};

// TODO should use combinedReducer

const persistedReducer = persistReducer(persistConfig, workoutsReducer);

export const store = configureStore({
  reducer: {
    workouts: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export { sidebarItemsActions };
