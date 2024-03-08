import MovieDetails from '../components/MovieDetails.js';
import { render } from '@testing-library/react';


test('renders value from props', () => {
  const valueToRender = 'Movie';
  const values = ['All', 'Documentary', 'Comedy', 'Horror', 'Crime'];  
  const {getByText} = render(<MovieDetails imageUrl = '' 
  movieName = 'Movie' releaseYear = '2003' genres = {values} rating = "" duration = "" description=""></MovieDetails>);
  const renderedValue = getByText(valueToRender);
  expect(renderedValue).toBeInTheDocument();
});
