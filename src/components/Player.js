import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { playTrack, pauseTrack } from '../features/player/playerSlice';
import './Player.css';

const Player = () => {
  const dispatch = useDispatch();
  const isPlaying = useSelector((state) => state.player.isPlaying);
  const currentTrack = useSelector((state) => state.player.currentTrack);

  const handlePlayPause = () => {
    if (isPlaying) {
      dispatch(pauseTrack());
    } else {
      dispatch(playTrack(currentTrack));
    }
  };

  return (
    <div className="player">
      <button onClick={() => dispatch(pauseTrack())}>Prev</button>
      <button onClick={handlePlayPause}>{isPlaying ? 'Pause' : 'Play'}</button>
      <button onClick={() => dispatch(playTrack(currentTrack))}>Next</button>
    </div>
  );
};

export default Player;
