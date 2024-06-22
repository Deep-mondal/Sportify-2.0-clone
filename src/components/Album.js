import React from 'react';
import './Album.css';

const Album = ({ albums }) => {
  return (
    <div className="album">
      {albums.map((album, index) => (
        <div key={index} className="album-item">
          <img src={album.image} alt={album.name} />
          <p>{album.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Album;
