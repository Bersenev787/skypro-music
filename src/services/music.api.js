import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { apiHost } from "./api.constants";

// Define a service using a base URL and expected endpoints
export const musicApi = createApi({
  reducerPath: "musicApi",
  baseQuery: fetchBaseQuery({
    baseUrl: apiHost,
    prepareHeaders: (headers, { getState }) => {
      console.log(getState());
      const { token } = getState().user;
      //   console.log(token)
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getFavoriteTracks: builder.query({
      query: () => `catalog/track/favorite/all/`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetFavoriteTracksQuery } = musicApi;
