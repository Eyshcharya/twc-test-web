import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogin: false,
  email: "",
  userID: "",
};
const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    setUserID: (state, { payload }) => {
      state.userID = payload;
    },
    navigateWelcomePage: (state, { payload }) => {
      state.isLogin = true;
      state.email = payload;
    },
    NavigateToLogin: (state) => {
      state.isLogin = false;
      state.email = null;
      state.userID = null;
    },
  },
});
export const { setUserID, navigateWelcomePage, NavigateToLogin } =
  homeSlice.actions;
export default homeSlice.reducer;
