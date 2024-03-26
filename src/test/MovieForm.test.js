import MovieForm from '../components/MovieForm.js';
import { screen, render } from '@testing-library/react';

const movieInfo = {
    title: "Scary Fog",
    url: "www.movie.com",
    genres: "Drama",
    releaseYear: "2007",
    rating: "2.7",
    runtime: "12 hours",
    description: "so scary"
}

test('renders value from props', () => {
  const {getByText} = render(<MovieForm movieInfo = {movieInfo}></MovieForm>);
  const title = screen.getByDisplayValue(movieInfo.title);
  expect(title).toBeInTheDocument();
  const url = screen.getByDisplayValue(movieInfo.url);
  expect(url).toBeInTheDocument();
  const genres = getByText(movieInfo.genres);
  expect(genres).toBeInTheDocument();
  const releaseYear = screen.getByDisplayValue(movieInfo.releaseYear);
  expect(releaseYear).toBeInTheDocument();
  const rating = screen.getByDisplayValue(movieInfo.rating);
  expect(rating).toBeInTheDocument();
  const runtime = screen.getByDisplayValue(movieInfo.runtime);
  expect(runtime).toBeInTheDocument();
  const description = screen.getByDisplayValue(movieInfo.description);
  expect(description).toBeInTheDocument();
});
