import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPlaylists } from '../features/playlist/playlistSlice';
import Playlist from '../components/Playlist';
import axios from 'axios';
import './Home.css';

const Home = () => {
  const dispatch = useDispatch();
  const playlists = useSelector((state) => state.playlist.playlists);

  useEffect(() => {
    axios.get('/api/playlists')
      .then((response) => {
        dispatch(setPlaylists(response.data));
      })
      .catch((error) => console.error('Error fetching playlists:', error));
  }, [dispatch]);

  return (
    <div className="home">
      <h1>Featured Playlists</h1>
      <Playlist playlists={playlists} />
    </div>
  );
};

export default Home;
