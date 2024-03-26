import MovieTile from '../components/MovieTile';

export default {
  title: 'MovieTile',
  component: MovieTile
};

export const InitialState = {
    args: {
        imageUrl: "https://images.unsplash.com/photo-1611419010196-a360856fc42f",
        movieName: "movie",
        releaseYear: "2012",
        genres: ["horror"],
        onSelect: (arg) => console.log(arg)
    }  
}
  