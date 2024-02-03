import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { apiHost, apiCatalog } from "./api.constants";
import { setUser } from "../store/slices/user";

const baseQueryWithReauth = async (args, api, extraOptions) => {
  const baseQuery = fetchBaseQuery({
    baseUrl: apiHost,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().user.access;
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  });

  const result = await baseQuery(args, api, extraOptions);

  if (result?.error?.status !== 401) {
    return result;
  }

  const forceLogout = () => {
    api.dispatch(setUser(null));
    console.log(window);
    window.location.reload("/login");
  };

  const { user } = api.getState();
  if (!user.refresh) {
    return forceLogout();
  }

  console.log("refreshResult.data.access");
  const refreshResult = await baseQuery(
    {
      url: "/user/token/refresh/",
      method: "POST",
      body: {
        refresh: user.refresh,
      },
    },
    api,
    extraOptions
  );

  if (refreshResult?.error?.status === 401) {
    return forceLogout();
  }

  api.dispatch(setUser({ ...user, access: refreshResult.data.access }));
  const retryResult = await baseQuery(args, api, extraOptions);
  if (retryResult?.error?.status === 401) {
    return forceLogout();
  }
  return retryResult;
};

// Define a service using a base URL and expected endpoints
export const musicApi = createApi({
  reducerPath: "musicApi",
  tagTypes: ["PlayList"],
  baseQuery: baseQueryWithReauth,
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
      query: () => `${apiCatalog}/favorite/all/`,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "FavoritePlayList", id })),
              { type: "FavoritePlayList", id: "FAVORITE_PLAY_LIST" },
            ]
          : [{ type: "FavoritePlayList", id: "FAVORITE_PLAY_LIST" }],
    }),
    addLike: builder.mutation({
      query: (id) => ({
        url: `/catalog/track/${id}/favorite/`,
        method: "POST",
      }),
      invalidatesTags: ["PlayList", "FavoritePlayList"],
    }),
    deleteLike: builder.mutation({
      query: (id) => ({
        url: `/catalog/track/${id}/favorite/`,
        method: "DELETE",
      }),
      invalidatesTags: ["PlayList", "FavoritePlayList"],
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
  useDeleteLikeMutation,
} = musicApi;
