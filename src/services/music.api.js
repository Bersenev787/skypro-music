import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { apiHost, apiCatalog } from "./api.constants";

const access = localStorage.getItem("refreshToken");

// Define a service using a base URL and expected endpoints
export const musicApi = createApi({
  reducerPath: "musicApi",
  baseQuery: fetchBaseQuery({
    baseUrl: apiHost,
    tagTypes: ["PlayList"],
    prepareHeaders: (headers) => {
      console.log(access);
      if (access) {
        headers.set("authorization", `Bearer ${access}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getPlaylist: builder.query({
      query: () => `${apiCatalog}/all`,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "PlayList", id })),
              { type: "PlayList", id: "LIST" },
            ]
          : [{ type: "PlayList", id: "LIST" }],
    }),
    getTrack: builder.query({
      query: (id) => `${apiCatalog}/${id}`,
    }),
    getFavoritePlaylist: builder.query({
      query: () => `${apiCatalog}/favorite/all`,
    }),
    addLike: builder.mutation({
      query: (id) => ({
        url: `/catalog/track/${id}/favorite/`,
        method: "POST",
      }),
      invalidatesTags: ["PlayList"],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetPlaylistQuery,
  useGetTrackQuery,
  useGetFavoritePlaylistQuery,
  useAddLikeMutation,
} = musicApi;
