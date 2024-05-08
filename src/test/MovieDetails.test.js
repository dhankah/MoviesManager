import MovieDetails from '../components/MovieDetails.js';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; 


test('renders value from props', () => {
  const valueToRender = 'Movie';
  const values = ['All', 'Documentary', 'Comedy', 'Horror', 'Crime'];  
  const {getByText} = render(<MemoryRouter> <MovieDetails/></MemoryRouter>);
  const renderedValue = getByText(valueToRender);
  expect(renderedValue).toBeInTheDocument();
});
