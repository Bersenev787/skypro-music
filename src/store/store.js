import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import trackReducer from "./slices/playList";
import userReducer from "./slices/user.js";
import { setupListeners } from "@reduxjs/toolkit/query";
import { musicApi } from "../services/music.api.js";
import { userApi } from "../services/user.api.js";

export const store = configureStore({
  reducer: {
    track: trackReducer,
    user: userReducer,
    [musicApi.reducerPath]: musicApi.reducer,
    [userApi.reducerPath]: musicApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([musicApi.middleware, userApi.middleware]),
});
setupListeners(store.dispatch);
