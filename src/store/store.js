import { configureStore } from "@reduxjs/toolkit";
import trackReducer from "./slices/playList";

export const store = configureStore({
  reducer: {
    track: trackReducer,
  },
});
