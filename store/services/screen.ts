import { API_URL } from "@/utils/config";
import type { TYPE_API_DATA, TYPE_FLASHCARD } from "@/utils/TYPES";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiService = createApi({
  reducerPath: "api",
  tagTypes: ["Screen1", "Screen2"],
  keepUnusedDataFor: 0,
  refetchOnReconnect: true,
  refetchOnMountOrArgChange: true,
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  endpoints: (builder) => ({
    getScreen1Data: builder.query<TYPE_API_DATA, void>({
      query: () => "/did_you_know",
    }),
    getScreen2Data: builder.query<TYPE_FLASHCARD, void>({
      query: () => "/flashcard",
    }),
  }),
});

export const { useGetScreen1DataQuery, useGetScreen2DataQuery } = apiService;
