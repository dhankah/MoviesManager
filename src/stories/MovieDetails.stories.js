import MovieDetails from '../components/MovieDetails';

export default {
  title: 'MovieDetails',
  component: MovieDetails
};

export const InitialState = {
    args: {
        imageUrl: "https://images.unsplash.com/photo-1611419010196-a360856fc42f",
        movieName: "movie",
        releaseYear: "2012",
        genres: ["horror"],
        rating: 1.2,
        duration: "12 hours",
        description: ["super cool"]
    }  
}
  