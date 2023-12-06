import { Suspense, useRef } from 'react';
import { useState, useEffect } from 'react';
import { Outlet, Link, useLocation, useParams } from 'react-router-dom';
import { getDetails } from '.././../components/Api';

import css from './MovieDetails.module.css';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const backLink = useRef(location.state?.from ?? '/');

  useEffect(() => {
    getDetails(movieId).then(setMovie);
  }, [movieId]);

  if (!movie) {
    return;
  }

  const formatAsPercent = (num) => {
  const percentValue = Math.round(num * 10);
  return `${percentValue}%`;
  };
    
     return (
    <>
      <div className={css.wrapper}>
        <div>
          <Link to={backLink.current} className={css.link}>
            <button className={css.backBtn}>← Go back</button>
          </Link>
          <img
            src={
              movie.poster_path
                ? `https://www.themoviedb.org/t/p/w500/${movie.poster_path}`
                : `https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg`
            }
            alt={`${movie.title}`}
          />
        </div>
        <div className={css.details}>
          <h2>
            {movie.title} ({movie.release_date.slice(0, 4)})
          </h2>
          <p>User score: {formatAsPercent(movie.vote_average)}</p>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
          <h3>Genres</h3>
          <p>{movie.genres.map(genre => genre.name).join(' / ')}</p>
        </div>
      </div>

      <div className={css.addiInfo}>
        <h2>Additional information</h2>
        <ul>
          <li>
            <Link to={'cast'}>Cast</Link>
          </li>
          <li>
            <Link to={'reviews'}>Reviews</Link>
          </li>
        </ul>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;