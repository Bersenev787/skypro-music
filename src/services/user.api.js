import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { apiHost } from "./api.constants";

export const userApi = createApi({
  reducerPath: "userApi",
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
    userToken: builder.mutation({
      query: (body) => ({
        url: "user/token/",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const {
  useUserRegisterMutation,
  useUserLoginMutation,
  useUserTokenMutation,
  useUserTokenRefreshMutation,
} = userApi;
