import React from 'react';
import './Genre.css';

const Genre = ({ genres }) => {
  return (
    <div className="genre">
      {genres.map((genre, index) => (
        <div key={index} className="genre-item">
          <p>{genre.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Genre;
