import { createSlice } from "@reduxjs/toolkit";

/*  eslint no-param-reassign: "error"   */

const initialState = {
  isLogin: false,
  email: null,
  userName: null,
  accessToken: null,
  trackId: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.isLogin = true;
      state.id = action.payload.id;
      state.email = action.payload.email;
      state.userName = action.payload.userName;
      state.accessToken = action.payload.accessToken;
    },
    removeUser: (state) => {
      state.id = "";
      state.email = "";
      state.userName = "";
      state.accessToken = "";
    },
    setRefresh: (state, { payload }) => ({
      ...state,
      refresh: payload.refresh,
    }),
    setAccess: (state, { payload }) => ({
      ...state,
      access: payload.access,
    }),
    setTrackPlay: (state, { payload }) => ({
      ...state,
      trackId: payload.id,
    }),
  },
});
export const { setUser, removeUser, setRefresh, setAccess, setTrackPlay } =
  userSlice.actions;
export default userSlice.reducer;
export const isLogin = (state) => state.user.isLogin;
