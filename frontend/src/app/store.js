import { configureStore } from "@reduxjs/toolkit";
import conversationReducer from "../features/conversation/conversation-slice";
import codeReducer from "../features/code/code-slice";
import sidebarReducer from "../features/ui/sidebar-slice";
import imageSlice from "../features/image/image-slice";

const store = configureStore({
  reducer: {
    conversation: conversationReducer,
    code: codeReducer,
    image: imageSlice,
    sidebar: sidebarReducer,
  },
});

export default store;
