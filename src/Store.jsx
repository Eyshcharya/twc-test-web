import { configureStore } from '@reduxjs/toolkit';
import homeReducer from './Features/homeSlice';
import contactReducer from './Features/contactSlice';
import modalReducer from './Features/ModalSlice';

export const Store = configureStore({
  reducer: {
    home: homeReducer,
    contact: contactReducer,
    modal: modalReducer,
  },
});
