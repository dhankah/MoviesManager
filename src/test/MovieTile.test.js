import MovieTile from '../components/MovieTile.js';
import { render } from '@testing-library/react';


const genres = ['Documentary', 'Comedy', 'Action']; 
const parsedGenres = 'Documentary, Comedy, Action';
const releaseYear = '2002';
const movieTile = {
  poster_path : '',
  title: 'Good Movie',
  release_date: '2002-11-04',
  genres: genres
}

test('renders value from props and parsesThem', () => {
  const valueToRender = 'Good Movie';
  const {getByText} = render(<MovieTile props={movieTile}/>);
  const renderedValue = getByText(valueToRender);
  expect(renderedValue).toBeInTheDocument();
  const actualYear = getByText(releaseYear);
  expect(actualYear).toBeInTheDocument();
  const actualGenres = getByText(parsedGenres);
  expect(actualGenres).toBeInTheDocument();
});


