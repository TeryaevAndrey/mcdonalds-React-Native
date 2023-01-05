import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeTab: 0
}

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setActiveTab: (state, action) => {
      state.activeTab = action.payload;
    }
  }
});

export const {setActiveTab} = authSlice.actions;