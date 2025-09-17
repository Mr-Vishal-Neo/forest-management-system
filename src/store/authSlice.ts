import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { getItem, removeItem, setItem } from "../utils/sessionStorageUtils";

interface AuthState {
  access_token: string | null;
  refresh_token: string | null;
}

const initialState: AuthState = {
  access_token: getItem("access_token"),
  refresh_token: getItem("refresh_token"),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setTokens: (
      state,
      action: PayloadAction<{ access_token: string; refresh_token: string }>
    ) => {
      state.access_token = action.payload.access_token;
      state.refresh_token = action.payload.refresh_token;
      setItem("access_token", action.payload.access_token);
      setItem("refresh_token", action.payload.refresh_token);
    },
    clearTokens: (state) => {
      state.access_token = null;
      state.refresh_token = null;
      removeItem("access_token");
      removeItem("refresh_token");
    },
  },
});

export const { setTokens, clearTokens } = authSlice.actions;

export default authSlice.reducer;
