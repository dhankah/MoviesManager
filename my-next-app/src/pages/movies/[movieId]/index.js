import MovieListComponent from '../../../pages/movies';
import MovieDetails from '../../../components/MovieDetails';
import Fetch from '../../../services/Fetch'


export default function MovieDetailsPage({movieProp}) {

  return (
    <>
      <MovieDetails movieProp={movieProp}/>
      <MovieListComponent />
    </>
  );
}


export async function getServerSideProps(context) {
  const { movieId } = context.params;

  const result = await Fetch(`movies/${movieId}`);

  return { props: { movieProp: result } };
}