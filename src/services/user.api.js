import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { apiHost } from "./api.constants";

export const userApi = createApi({
  reducerPath: "userApi",
  tagTypes: ["PlayList", "FavoritePlayList"],
  baseQuery: fetchBaseQuery({
    baseUrl: apiHost,
  }),
  endpoints: (builder) => ({
    userLogin: builder.mutation({
      query: (body) => ({
        url: "/user/login/",
        method: "POST",
        body,
      }),
    }),
    userRegister: builder.mutation({
      query: (body) => ({
        url: "/user/signup/",
        method: "POST",
        body,
      }),
    }),
    userAccessToken: builder.mutation({
      query: (body) => ({
        url: "user/token/",
        method: "POST",
        body,
        invalidatesTags: [{ type: "PlayList", id: "LIST" }],
      }),
    }),
    userAccessTokenRefresh: builder.mutation({
      query: (body) => ({
        url: "user/token/refresh/",
        method: "POST",
        body: JSON.stringify({ refresh: body.refresh }),
        headers: {
          "Content-Type": "application/json", // Указываем тип контента
        },
        invalidatesTags: [{ type: "PlayList", id: "LIST" }],
      }),
    }),
  }),
});

export const {
  useUserRegisterMutation,
  useUserLoginMutation,
  useUserAccessTokenMutation,
  useUserAccessTokenRefreshMutation,
} = userApi;
