import React, { lazy, Suspense } from 'react';
import { NavLink, Routes, Route, Navigate, BrowserRouter as Router } from 'react-router-dom';

const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('../components/Cast/Cast'));
const Reviews = lazy(() => import('../components/Reviews/Reviews'));


export const App = () => {
  return (
      <Router>
          {/* W powyższym przykładzie <Router> jest bezpośrednio rodzicem nav i Suspense. Jest to dozwolone w JSX, a także może poprawić czytelność kodu, eliminując zbędny kontener (<div>). */}
      <nav className={css.navigation}>
        <NavLink className={css.link} to="/">
          Home
        </NavLink>
        <NavLink className={css.link} to="/movies">
          Movies
        </NavLink>
      </nav>
      <Suspense fallback={<div>Wystąpił błąd podczas ładowania strony</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />}>
            <Route index element={<div>Movies Index</div>} />
            <Route path=":movieId" element={<MovieDetails />}>
              <Route path="cast" element={<Cast />} />
              <Route path="review" element={<Reviews />} />
            </Route>
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </Router>
  );
};


//  Lazy pozwala na opóźnione ładowanie komponentów. Możesz użyć do dynamicznego importowania 
// komponentów = te komponenty będą pobrane dopiero w momencie, gdy zostaną użyte.

// Suspense to komponent, który pozwala na zdefiniowanie fallbacku 
// (czegoś, co będzie pokazywane podczas ładowania opóźnionego komponentu)
// i otaczanie miejsc, gdzie używasz lazy