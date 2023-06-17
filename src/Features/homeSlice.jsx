import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLogin: true,
};
const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    navigateWelcomePage: (state) => {
      state.isLogin = false;
    },
  },
});
export const { navigateWelcomePage } = homeSlice.actions;
export default homeSlice.reducer;
