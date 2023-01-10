import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activePage: 0
}

export const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    setActivePage: (state, action) => {
      state.activePage = action.payload;
    }
  }
});

export const {setActivePage} = sidebarSlice.actions;



