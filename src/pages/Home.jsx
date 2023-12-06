import { getTrending } from '../components/Api';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';


const useTrending = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    getTrending().then(setTrendingMovies);
  }, []); 

  return (
    <>
      <h1>Trending today</h1>
      <ul>
      {trendingMovies.map(movie => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`} state={{ from: location }}>
            {movie.title}
          </Link>
        </li>
      ))}
    </ul>
    </>
  );
};

export default useTrending;