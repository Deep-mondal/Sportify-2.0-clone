import { createSlice } from '@reduxjs/toolkit';

const playerSlice = createSlice({
  name: 'player',
  initialState: {
    isPlaying: false,
    currentTrack: null,
  },
  reducers: {
    playTrack: (state, action) => {
      state.isPlaying = true;
      state.currentTrack = action.payload;
    },
    pauseTrack: (state) => {
      state.isPlaying = false;
    },
    setCurrentTrack: (state, action) => {
      state.currentTrack = action.payload;
    },
  },
});

export const { playTrack, pauseTrack, setCurrentTrack } = playerSlice.actions;
export default playerSlice.reducer;
