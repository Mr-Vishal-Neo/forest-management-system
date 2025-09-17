// layoutSlice.ts
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { IconKey } from '../types/types';

export type LayoutState = {
  activePanelKey: IconKey | null;
  sidebarOpen: boolean;
  sideBarText: boolean;
};

const initialState: LayoutState = {
  activePanelKey: null,
  sidebarOpen: false,
  sideBarText: false,
};

const layoutSlice = createSlice({
  name: 'layout',
  initialState,
  reducers: {
    setActivePanelKey(state, action: PayloadAction<IconKey | null>) {
      state.activePanelKey = action.payload;
    },
    toggleSidebar(state) {
      state.sidebarOpen = !state.sidebarOpen;
    },
    setSidebarOpen(state, action: PayloadAction<boolean>) {
      state.sidebarOpen = action.payload;
    },
    toggleSideBarText(state) {
      state.sideBarText = !state.sideBarText;
    },
    setSideBarText(state, action: PayloadAction<boolean>) {
      state.sideBarText = action.payload;
    },
  },
});

export const {
  setActivePanelKey,
  toggleSidebar,
  setSidebarOpen,
  toggleSideBarText,
  setSideBarText,
} = layoutSlice.actions;

export default layoutSlice.reducer;
