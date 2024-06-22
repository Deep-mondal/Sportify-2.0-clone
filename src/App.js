import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import SearchResults from './pages/SearchResults';
import Player from './components/Player';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<SearchResults />} />
            {/* Add more routes here for playlists, albums, genres */}
          </Routes>
        </main>
        <Player />
      </div>
    </Router>
  );
};

export default App;
