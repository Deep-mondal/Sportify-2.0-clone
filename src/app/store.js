import { configureStore } from '@reduxjs/toolkit';
import playlistReducer from '../features/playlist/playlistSlice';
import searchReducer from '../features/search/searchSlice';
import playerReducer from '../features/player/playerSlice';

export const store = configureStore({
  reducer: {
    playlist: playlistReducer,
    search: searchReducer,
    player: playerReducer,
  },
});

export default store;
