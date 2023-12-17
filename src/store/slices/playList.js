import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  trackId: "",
  isPlayTrack: false,
  tracksList: [],
  track: {},
  isShuffle: false,
  shuffledTrack: [],
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
      console.log("setTracksList", payload);
      state.tracksList = payload;
    },
    setTrack: (state, { payload }) => {
      state.track = payload;
    },
    setIsShuffle: (state, { payload }) => {
      state.isShuffle = payload;
    },
    setShuffledTracks: (state, { payload }) => {
      state.shuffledTrack = payload;
    },
  },
});

export const {
  setTrackId,
  setIsPlayTrack,
  setTrack,
  setTracksList,
  setIsShuffle,
  setShuffledTracks,
} = tracksSlice.actions;

export default tracksSlice.reducer;
