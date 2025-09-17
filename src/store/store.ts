import { configureStore } from "@reduxjs/toolkit";
import forestReducer from "./forestSlice";
import sidebarReducer from "./sidebarSlice";
import authReducer from "./authSlice";
import layoutReducer from "./layoutSlice";

export const store = configureStore({
  reducer: {
    forest: forestReducer,
    sidebar: sidebarReducer,
    auth: authReducer,
    layout: layoutReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
