import React, { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';


const SharedLayout = lazy(() => import('components/SharedLayout/SharedLayout')); // done
const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('../components/Cast/Cast'));
const Reviews = lazy(() => import('../components/Reviews/Reviews'));

const Error = () => {
  return <h3>Wystąpił błąd podczas ładowania komponentu.</h3>;
};

export const App = () => {
  return (
    <Suspense fallback={<Error />}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
  </Suspense>
  );
};



//  Lazy pozwala na opóźnione ładowanie komponentów. Możesz użyć do dynamicznego importowania 
// komponentów = te komponenty będą pobrane dopiero w momencie, gdy zostaną użyte.

// Suspense to komponent, który pozwala na zdefiniowanie fallbacku 
// (czegoś, co będzie pokazywane podczas ładowania opóźnionego komponentu)
// i otaczanie miejsc, gdzie używasz lazy