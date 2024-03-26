import GenreSelectComponent from '../components/GenreSelectComponent';

export default {
  title: 'GenreSelectComponent',
  component: GenreSelectComponent
};

export const InitialState = {
    args: {
      genresList: ['All', 'Documentary', 'Comedy', 'Horror', 'Crime'],
      currentGenreInput: "Comedy",
      onSelect: (arg) => console.log(arg)
    }  
}
  