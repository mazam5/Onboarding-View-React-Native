import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { onboarding1Slice } from "./features/reducer1";
import { onboarding2Slice } from "./features/reducer2";
import { apiService } from "./services/screen";

export const store = configureStore({
  reducer: {
    data1: onboarding1Slice.reducer,
    data2: onboarding2Slice.reducer,
    [apiService.reducerPath]: apiService.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiService.middleware),
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
setupListeners(store.dispatch);
