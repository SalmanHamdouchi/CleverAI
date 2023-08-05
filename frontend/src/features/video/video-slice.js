import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import BackendService from "../../services/backend-service";

let initialState = {
  videos: [],
  loading: false,
  error: null,
};
let backendService = new BackendService();

export const generateVideoThunk = createAsyncThunk(
  "video/generateVideo",
  (prompt) => {
    return backendService.generateVideo(prompt);
  }
);

const videoSlice = createSlice({
  name: "video",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(generateVideoThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(generateVideoThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        const videoUrl = action.payload;
        state.videos.push({ url: videoUrl });
        console.log(action);
      })
      .addCase(generateVideoThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export let selectAllVideos = (state) => state.video.videos;
export let selectLoading = (state) => state.video.loading;
export default videoSlice.reducer;
