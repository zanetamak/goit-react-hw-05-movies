import React, { useEffect, useState } from 'react';
import { getTrending } from 'components/Api';
import { NavLink, useLocation } from 'react-router-dom';


const useTrending = () => {
    const [trendingMovies, setTrendingMovies] = useState([]);

const location = useLocation();

  // Hook do pobierania danych przy zamontowaniu komponentu
  useEffect(() => {
    // Pobieranie listy popularnych filmów z API
    getTrending().then(setTrendingMovies);
  }, []);

  // Renderowanie poprzez mapowanie komponentu z listą popularnych filmów
  return (
     <>  skrócona składnia dla komponentu React.Fragment
      <h1>Trending Today</h1>
      <ul>
        {trendingMovies.map(movie => (
          <li key={movie.id}>
            {/* Używanie komponentu NavLink do nawigacji do strony szczegółów filmu */}
            <NavLink to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </>
  );
};

export default useTrending