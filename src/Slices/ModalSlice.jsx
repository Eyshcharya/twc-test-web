import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isSaveModelOpen: false,
  isDeleteModalOpen: false,
  isDeleteSuccessOpen: false,
};
const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    OpenSaveModal: (state) => {
      state.isSaveModelOpen = true;
    },
    CloseSaveModal: (state) => {
      state.isSaveModelOpen = false;
    },
    OpenDeleteModal: (state) => {
      state.isDeleteModalOpen = true;
    },
    CloseDeleteModal: (state) => {
      state.isDeleteModalOpen = false;
    },
    OpenDeleteSuccessModal: (state) => {
      state.isDeleteSuccessOpen = true;
    },
    CloseDeleteSuccessModal: (state) => {
      state.isDeleteSuccessOpen = false;
    },
  },
});
export const {
  OpenSaveModal,
  CloseSaveModal,
  OpenDeleteModal,
  CloseDeleteModal,
  OpenDeleteSuccessModal,
  CloseDeleteSuccessModal,
} = modalSlice.actions;
export default modalSlice.reducer;
