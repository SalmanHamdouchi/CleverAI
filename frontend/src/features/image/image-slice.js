import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import BackendService from "../../services/backend-service";

let initialState = {
  images: [],
  loading: false,
  error: null,
};
let backendService = new BackendService();

export const generateImageThunk = createAsyncThunk(
  "image/generateImage",
  (prompt) => {
    return backendService.generateImage(prompt);
  }
);

const imageSlice = createSlice({
  name: "image",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(generateImageThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(generateImageThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        const imageURL = action.payload;
        state.images.push({ url: imageURL });
      })
      .addCase(generateImageThunk.rejected, (state, action) => {
        console.log("rejected :", action.error.message);
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export let selectAllImages = (state) => state.image.images;
export let selectLoading = (state) => state.image.loading;
export default imageSlice.reducer;
