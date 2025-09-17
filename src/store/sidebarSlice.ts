// src/store/sidebarSlice.ts
import { createSlice } from "@reduxjs/toolkit";
import { fetchBiodiversityHealthData } from "../services/thunks/sideBarApis";

interface SidebarState {
  biodiversity: any[];
  carbon: any[];
  loading: boolean;
  error: string | null;
}

const initialState: SidebarState = {
  biodiversity: [],
  carbon: [],
  loading: false,
  error: null,
};

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Biodiversity
      .addCase(fetchBiodiversityHealthData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBiodiversityHealthData.fulfilled, (state, action) => {
        state.loading = false;
        state.biodiversity = action.payload;
      })
      .addCase(fetchBiodiversityHealthData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      // Carbon
    //   .addCase(fetchCarbonAccountingData.pending, (state) => {
    //     state.loading = true;
    //     state.error = null;
    //   })
    //   .addCase(fetchCarbonAccountingData.fulfilled, (state, action) => {
    //     state.loading = false;
    //     state.carbon = action.payload;
    //   })
    //   .addCase(fetchCarbonAccountingData.rejected, (state, action) => {
    //     state.loading = false;
    //     state.error = action.payload as string;
    //   });
  },
});

export default sidebarSlice.reducer;
