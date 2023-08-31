import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage/session";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";

import { apiSlice } from "../Slices/API/apiSlice";
import homeReducer from "../Slices/homeSlice";
import modalReducer from "../Slices/ModalSlice";
// import contactReducer from "../Slices/contactSlice";

// redux-persist config
const persistConfig = {
  key: "root",
  version: 1,
  storage,
  whitelist: ["home"],
};

//combine reducers
const reducer = combineReducers({
  home: homeReducer,
  modal: modalReducer,
  [apiSlice.reducerPath]: apiSlice.reducer,
});

// persist reducer
const persistedReducer = persistReducer(persistConfig, reducer);

export const Store = configureStore({
  reducer: persistedReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: ["persist/PERSIST"],
      },
    }).concat(apiSlice.middleware),
  devTools: true,
});
