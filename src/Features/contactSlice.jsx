import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contactArray: JSON.parse(localStorage.getItem('contactDetails')) || [],
  isEmptyContactArray: false,
};
const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    setEmptyContactArray: (state) => {
      state.isEmptyContactArray = true;
    },
    addContact: ({ contactArray }, { payload }) => {
      contactArray.push(payload);
      localStorage.setItem('contactDetails', JSON.stringify(contactArray));
    },
    deleteContact: (state, { payload }) => {
      state.contactArray = state.contactArray.filter(
        (contact) => contact.id !== payload.id
      );
      localStorage.setItem(
        'contactDetails',
        JSON.stringify(state.contactArray)
      );
    },
    editContact: (state, { payload }) => {
      console.log(payload);

      state.contactArray[payload.index] = payload;

      localStorage.setItem(
        'contactDetails',
        JSON.stringify(state.contactArray)
      );
    },
  },
});
export const { addContact, deleteContact, setEmptyContactArray, editContact } =
  contactSlice.actions;
export default contactSlice.reducer;
