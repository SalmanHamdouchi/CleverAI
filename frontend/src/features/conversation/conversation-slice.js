import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import BackendService from "../../services/backend-service";

let initialState = {
  messages: [],
  loading: false,
  error: null,
};
let backendService = new BackendService();

export const generateTextThunk = createAsyncThunk(
  "conversation/generateText",
  (prompt) => {
    return backendService.generateText(prompt);
  }
);

const conversationSlice = createSlice({
  name: "conversation",
  initialState,
  reducers: {
    addMessage: (state, action) => {
      state.messages.push({ content: action.payload, role: "user" });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(generateTextThunk.pending, (state) => {
        console.log("pending");
        state.loading = true;
        state.error = null;
      })
      .addCase(generateTextThunk.fulfilled, (state, action) => {
        console.log("fulfilled");
        state.loading = false;
        state.error = null;
        const content = action.payload;
        state.messages.push({ content: content, role: "assistant" });
      })
      .addCase(generateTextThunk.rejected, (state, action) => {
        console.log("rejected :", action.error.message);
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export let {
  setPrompt,
  generateTextStart,
  generateTextSuccess,
  generateTextFailure,
} = conversationSlice.actions;

export let selectAllMessages = (state) => state.conversation.messages;
export let selectLoading = (state) => state.conversation.loading;
export let { addMessage } = conversationSlice.actions;
export default conversationSlice.reducer;
