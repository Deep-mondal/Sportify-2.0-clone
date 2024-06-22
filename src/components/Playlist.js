import React from 'react';
import './Playlist.css';

const Playlist = ({ playlists }) => {
  return (
    <div className="playlist">
      {playlists.map((playlist, index) => (
        <div key={index} className="playlist-item">
          <img src={playlist.image} alt={playlist.name} />
          <p>{playlist.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Playlist;
