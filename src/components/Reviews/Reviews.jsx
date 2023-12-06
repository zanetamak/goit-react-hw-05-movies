import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from '../Api'

const Reviews = () => {
  const [movieReviews, setMovieReviews] = useState(null);
  const { movieId } = useParams();
    
    //  useEffect do pobierania recenzji
     useEffect(() => {
    getReviews(movieId).then(setMovieReviews);
  }, [movieId]);

  if (!movieReviews) {
    return;
  }

  return (
    <div>
      {movieReviews.length > 0 ? (
        <ul>
          {movieReviews.map(review => (
            <li key={review.id}>
              <h3>Author: {review.author}</h3>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        'There is no review of this film yet'
      )}
    </div>
  );
};

export default Reviews;
/* Warunek sprawdza, czy długość tablicy movieReviews jest większa niż 0.
Jeśli movieReviews.length jest większe niż 0, renderuje listę nieuporządkowaną ul. */
      /* Jeśli nie ma recenzji movieReviews.length nie jest większe niż 0, renderuje tekst "Brak recenzji tego filmu". */