import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  trackId: "",
  isPlayTrack: false,
  tracksList: [],
  track: {},
};

export const tracksSlice = createSlice({
  name: "trackStore",
  initialState,
  reducers: {
    setTrackId: (state, { payload }) => {
      state.trackId = payload;
    },
    setIsPlayTrack: (state, { payload }) => {
      state.isPlayTrack = payload;
    },
    setTracksList: (state, { payload }) => {
      state.tracksList = payload;
    },
    setTrack: (state, { payload }) => {
      state.track = payload;
    },
  },
});

export const { setTrackId, setIsPlayTrack, setTrack, setTracksList } =
  tracksSlice.actions;

export default tracksSlice.reducer;
