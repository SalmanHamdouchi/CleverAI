import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import BackendService from "../../services/backend-service";

let initialState = {
  messages: [],
  loading: false,
  error: null,
};
let backendService = new BackendService();

export const generateCodeThunk = createAsyncThunk(
  "code/generateCode",
  async (prompt, thunkAPI) => {
    try {
      let response = await backendService.generateCode(prompt);
      return response;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(
        "Failed to process your request, please try again!"
      );
    }
  }
);

const codeSlice = createSlice({
  name: "code",
  initialState,
  reducers: {
    addMessage: (state, action) => {
      state.messages.push({ content: action.payload, role: "user" });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(generateCodeThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(generateCodeThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        const content = action.payload;
        state.messages.push({ content: content, role: "assistant" });
      })
      .addCase(generateCodeThunk.rejected, (state, action) => {
        state.loading = false;
        console.log(action);
        state.error = action.payload;
      });
  },
});

export let {
  setPrompt,
  generateTextStart,
  generateTextSuccess,
  generateTextFailure,
  addMessage,
} = codeSlice.actions;

export let selectAllMessages = (state) => state.code.messages;
export let selectLoading = (state) => state.code.loading;
export default codeSlice.reducer;
