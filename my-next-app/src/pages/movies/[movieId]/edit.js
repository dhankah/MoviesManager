import MovieDetailsPage from '../../../pages/movies/[movieId]/index';
import EditMovieComponent from '../../../components/EditMovieComponent';
import MovieListComponent from '../../../pages/movies';


export default function EditMovie() {
  return (
    <>
      <MovieDetailsPage/>
      <EditMovieComponent />
      <MovieListComponent />
    </>
  );
}