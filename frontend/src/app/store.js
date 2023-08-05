import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "../features/ui/sidebar-slice";
import conversationReducer from "../features/conversation/conversation-slice";
import codeReducer from "../features/code/code-slice";
import imageReducer from "../features/image/image-slice";
import videoReducer from "../features/video/video-slice";

const store = configureStore({
  reducer: {
    conversation: conversationReducer,
    code: codeReducer,
    image: imageReducer,
    video: videoReducer,
    sidebar: sidebarReducer,
  },
});

export default store;
