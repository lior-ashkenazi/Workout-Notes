import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  reducer as sidebarItemsReducer,
  actions as sidebarItemsActions,
} from "./slices/sidebarItemsSlice";
import {
  reducer as carouselsReducer,
  actions as carouselsActions,
} from "./slices/carouselsSlice";
import {
  reducer as cardsReducer,
  actions as cardsActions,
} from "./slices/cardsSlice";
import {
  reducer as cardItemsReducer,
  actions as cardItemsActions,
} from "./slices/cardItemsSlice";
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

const rootReducer = combineReducers({
  sidebarItems: sidebarItemsReducer,
  carousels: carouselsReducer,
  cards: cardsReducer,
  cardItems: cardItemsReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: {
    reducer: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export * from "./thunks/sidebarItemsThunks";
export * from "./thunks/carouselsThunks";
export * from "./thunks/cardsThunks";
export * from "./thunks/cardsItemsThunks";
export {
  sidebarItemsActions,
  carouselsActions,
  cardsActions,
  cardItemsActions,
};
