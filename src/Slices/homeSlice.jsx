import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogin: false,
  email: "",
};
const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    navigateWelcomePage: (state, { payload }) => {
      state.isLogin = true;
      state.email = payload;
    },
    NavigateToLogin: (state) => {
      state.isLogin = false;
      state.email = null;
    },
  },
});
export const { navigateWelcomePage, NavigateToLogin } = homeSlice.actions;
export default homeSlice.reducer;
