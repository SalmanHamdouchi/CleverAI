import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSideBarOpen: false,
};

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    setIsSideBarOpen: (state, action) => {
      state.isSideBarOpen = action.payload;
    },
  },
});

export const selectIsSideBarOpen = (state) => state.sidebar.isSideBarOpen;
export const { setIsSideBarOpen } = sidebarSlice.actions;
export default sidebarSlice.reducer;
