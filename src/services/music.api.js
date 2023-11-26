import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { apiHost } from "./api.constants";

// Define a service using a base URL and expected endpoints
export const musicApi = createApi({
  reducerPath: "musicApi",
  baseQuery: fetchBaseQuery({
    baseUrl: apiHost,
  }),
  endpoints: (builder) => ({
    getPlaylist: builder.query({
      query: () => "/catalog/track/all",
    }),
    getTrack: builder.query({
      query: (id) => `/catalog/track/${id}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPlaylistQuery, useGetTrackQuery } = musicApi;
