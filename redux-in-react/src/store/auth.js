import { createSlice } from "@reduxjs/toolkit";

const authState = { isAuthentificated: false };

const authSlice = createSlice({
  name: "auth",
  initialState: authState,
  reducers: {
    login(state) {
      state.isAuthentificated = true;
    },
    logout(state) {
      state.isAuthentificated = false;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
