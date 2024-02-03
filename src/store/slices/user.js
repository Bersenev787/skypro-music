import { createSlice } from "@reduxjs/toolkit";

/*  eslint no-param-reassign: "error"   */

function getAuthFromLocalStorage() {
  try {
    return JSON.parse(localStorage.getItem("user"));
  } catch (error) {
    console.error(error);
    return null;
  }
}

const initialState = {
  isLogin: false,
  email: null,
  userName: null,
  access: null,
  refresh: null,
  trackId: null,
  id: null,
};

const userSlice = createSlice({
  name: "user",
  initialState: getAuthFromLocalStorage() ?? initialState,
  reducers: {
    setUser: (state, action) => {
      const payload = action.payload ?? initialState;

      state.isLogin = true;
      state.id = payload.id;
      state.email = payload.email;
      state.userName = payload.userName;
      state.access = payload.access;
      state.refresh = payload.refresh;

      localStorage.setItem("user", JSON.stringify(state));
    },
    removeUser: (state) => {
      state.id = "";
      state.email = "";
      state.userName = "";
      state.access = "";
      state.refresh = "";
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
