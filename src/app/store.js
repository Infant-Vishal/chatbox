import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import chatBoxReducer from "../features/slices/chatBoxSlice";

const persistConfig = {
  key: "root",
  version: 2,
  storage,
};

const persistedReducer = persistReducer(persistConfig, chatBoxReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
