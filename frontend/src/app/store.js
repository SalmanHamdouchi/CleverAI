import { configureStore } from "@reduxjs/toolkit";
import conversationReducer from "../features/conversation/conversation-slice";
import sidebarReducer from "../features/ui/sidebar-slice";

const store = configureStore({
  reducer: {
    conversation: conversationReducer,
    sidebar: sidebarReducer,
  },
});

export default store;
