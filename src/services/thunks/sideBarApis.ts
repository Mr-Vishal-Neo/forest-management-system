import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosPrivate, axiosPublic } from "../client";
import axios from "axios";

// Fetch forest data (Public API)
export const fetchBiodiversityHealthData = createAsyncThunk(
  "fms/fetchBiodiversityHealthData",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosPublic.get("/biodiversity/health");
      return response.data;
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        return rejectWithValue(err.response?.data || err.message);
      }
      return rejectWithValue("An unexpected error occurred");
    }
  }
);

export const fetchCarbonAccountingData = createAsyncThunk(
  "fms/fetchCarbonAccountingData",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosPublic.get("/carbonaccounting");
      return response.data;
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        return rejectWithValue(err.response?.data || err.message);
      }
      return rejectWithValue("An unexpected error occurred");
    }
  }
);

export const fetchSustainableForestManagementData = createAsyncThunk(
  "fms/fetchForestManagementData",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosPublic.get("/sfm");
      return response.data;
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        return rejectWithValue(err.response?.data || err.message);
      }
      return rejectWithValue("An unexpected error occurred");
    }
  }
);

export const fetchCatchmentData = createAsyncThunk(
  "fms/fetchCatchmentData",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosPublic.get("/catchment-mgmt");
      return response.data;
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        return rejectWithValue(err.response?.data || err.message);
      }
      return rejectWithValue("An unexpected error occurred");
    }
  }
);

export const fetchForestProtectionData = createAsyncThunk(
  "fms/fetchForestProtectionData",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosPublic.get("/forest-protection");
      return response.data;
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        return rejectWithValue(err.response?.data || err.message);
      }
      return rejectWithValue("An unexpected error occurred");
    }
  }
);

export const fetchWildlifeProtectionData = createAsyncThunk(
  "fms/fetchWildlifeProtectionData",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosPublic.get("/wildlife-protection");
      return response.data;
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        return rejectWithValue(err.response?.data || err.message);
      }
      return rejectWithValue("An unexpected error occurred");
    }
  }
);

// Secure API example
export const updateForestRecord = createAsyncThunk(
  "forest/updateRecord",
  async (payload: { id: string; data: unknown }, { rejectWithValue }) => {
    try {
      const response = await axiosPrivate.put(
        `/forest/${payload.id}`,
        payload.data
      );
      return response.data;
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        return rejectWithValue(err.response?.data || err.message);
      }
      return rejectWithValue("An unexpected error occurred");
    }
  }
);
