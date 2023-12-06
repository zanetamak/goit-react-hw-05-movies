import React, { useEffect, useState } from 'react';
import { getTrending } from '../components/Api'; 
import { useSearchParams, NavLink, useLocation } from 'react-router-dom';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const { trending } = searchParams;
  const location = useLocation();

 const handleSubmit = (e) => {
  e.preventDefault();
  const { elements } = e.currentTarget;
  const newTrending = elements.query.value;
  
  if (newTrending !== '') {
    setSearchParams({ trading: newTrending });
  } else {
    setSearchParams({});
  }
  
  e.currentTarget.reset();
};

  useEffect(() => {
  trending && getTrending(trending).then(setMovies);
}, [trending]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="trending" defaultValue={trending || ''} /> 
        <button type="submit">Search</button>
      </form>
      {movies.length === 0 && trending ? ( 
        <div>No results. Please try again.</div>
      ) : (
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>
              <NavLink to={`/movies/${movie.id}`} state={{ from: location }}>
                {movie.title}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Movies;