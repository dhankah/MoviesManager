import MovieTile from '../components/MovieTile.js';
import { render, fireEvent } from '@testing-library/react';


test('renders value from props', () => {
  const valueToRender = 'Good Movie';
  const values = ['Documentary', 'Comedy', 'Horror', 'Crime'];  
  const {getByText} = render(<MovieTile imageUrl = '' 
  title = {valueToRender} releaseYear = '2003' genres = {values} onSelect = {() => console.log(movieName)}></MovieTile>);
  const renderedValue = getByText(valueToRender);
  expect(renderedValue).toBeInTheDocument();
});

test('calls onSelect on click', () => {
    const values = ['Documentary', 'Comedy', 'Horror', 'Crime'];
    const mockOnChange = jest.fn();

    const {getByTestId} = render(<MovieTile imageUrl = '' 
    movieName = 'Movie' releaseYear = '2003' genres = {values} onSelect = {mockOnChange}></MovieTile>);

    fireEvent.click(getByTestId('movie-tile'));

    expect(mockOnChange).toHaveBeenCalled();
  });
