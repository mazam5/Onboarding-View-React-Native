import { TYPE_FLASHCARD } from "@/utils/TYPES";
import { createSlice } from "@reduxjs/toolkit";

const initialState2: TYPE_FLASHCARD = {
  content: "",
  image_url: "",
  title: "",
};
export const onboarding2Slice = createSlice({
  name: "screen2",
  initialState: { initialState2, error: "", loading: true },
  reducers: {
    setData2: (state, action) => {
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

export const { setData2 } = onboarding2Slice.actions;

export default onboarding2Slice.reducer;
