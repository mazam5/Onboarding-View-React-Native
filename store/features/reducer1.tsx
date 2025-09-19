import { TYPE_API_DATA } from "@/utils/TYPES";
import { createSlice } from "@reduxjs/toolkit";

const initialState1: TYPE_API_DATA = {
  cause_and_effect: {
    cause: "",
    effect: "",
  },
  citation: {
    label: "",
    url: "",
  },
  content: "",
  image_url: "",
  title: "",
};
export const onboarding1Slice = createSlice({
  name: "screen1",
  initialState: { initialState1, error: "", loading: true },
  reducers: {
    setData1: (state, action) => {
      return { ...state, ...action.payload };
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setData1 } = onboarding1Slice.actions;

export default onboarding1Slice.reducer;
