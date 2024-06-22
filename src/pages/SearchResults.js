import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setQuery, setResults } from '../features/search/searchSlice';
import axios from 'axios';
import './SearchResults.css';

const SearchResults = () => {
  const dispatch = useDispatch();
  const query = useSelector((state) => state.search.query);
  const results = useSelector((state) => state.search.results);

  const handleSearch = (e) => {
    e.preventDefault();
    axios.get(`/api/search?q=${query}`)
      .then((response) => {
        dispatch(setResults(response.data));
      })
      .catch((error) => console.error('Error searching:', error));
  };

  return (
    <div className="search-results">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => dispatch(setQuery(e.target.value))}
          placeholder="Search for songs, albums, artists..."
        />
        <button type="submit">Search</button>
      </form>
      <div className="results">
        {results.map((result, index) => (
          <div key={index} className="result-item">
            <img src={result.image} alt={result.name} />
            <p>{result.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
