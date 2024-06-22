import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to="/">Home</Link>
      <Link to="/search">Search</Link>
      <Link to="/playlists">Playlists</Link>
      <Link to="/albums">Albums</Link>
      <Link to="/genres">Genres</Link>
    </div>
  );
};

export default Sidebar;
