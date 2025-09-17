// src/store/forestSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface ForestState {
  data: any[];
  loading: boolean;
  error: string | null;
}

const initialState: ForestState = {
  data: [],
  loading: false,
  error: null,
};

// Async thunk for API call
export const fetchForestData = createAsyncThunk(
  "forest/fetchData",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("https://api.example.com/forest");
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

const forestSlice = createSlice({
  name: "forest",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchForestData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchForestData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchForestData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default forestSlice.reducer;
