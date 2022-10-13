import * as React from 'react';
import { MovieList } from '../../components';
import { useMovies } from './useMovies';

export function MovieListContainer() {
  const { isLoading, isError, error, movies } = useMovies();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <h1 className="text-2xl font-semibold mb-2">{error?.message}</h1>;
  }

  return (
    <React.Fragment>
      <h1 className="text-2xl font-semibold mb-2">Top 10 Movies Of All Time</h1>
      <MovieList movies={movies} />
    </React.Fragment>
  );
}