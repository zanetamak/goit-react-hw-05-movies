import React, { useEffect, useState } from 'react';
import { getQuery } from '../components/Api';
import { useSearchParams, NavLink, useLocation } from 'react-router-dom';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('query') || ''); // Dodane state dla query
  const location = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();
    const { elements } = e.currentTarget;

    const newQuery = elements.query ? elements.query.value : '';

    if (newQuery !== '') {
      setSearchParams({ query: newQuery });
      setQuery(newQuery); // Ustawienie lokalnego stanu dla query
    } else {
      setSearchParams({});
      setQuery('');
    }

    e.currentTarget.reset();
  };

  useEffect(() => {
    console.log(query);
    if (query) {
      getQuery(query).then((data) => {
        setMovies(data);
      });
    }
  }, [query]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="query" defaultValue={query || ''} />
        <button type="submit">Search</button>
      </form>
      {movies.length === 0 && query ? (
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