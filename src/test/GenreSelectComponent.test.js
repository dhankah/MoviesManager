import { render, screen, fireEvent } from '@testing-library/react';
import GenreSelectComponent from '../components/GenreSelectComponent.js';

test('renders values from props', () => {
    const values = ['All', 'Documentary', 'Comedy', 'Horror', 'Crime'];
    const current = values[0];
    const mockOnChange = jest.fn();

    const {container} = render(<GenreSelectComponent genresList={values} currentGenreInput = {current} onSelect={mockOnChange}></GenreSelectComponent>);
    values.map(genre => {
        const renderedValue = screen.getByText(genre);
        expect(renderedValue).toBeInTheDocument();
    })
    const listItems = container.querySelectorAll('li');
    expect(listItems.length).toBe(values.length);
  });

  test('should highlight selected genre', () => {
    const values = ['All', 'Documentary', 'Comedy', 'Horror', 'Crime'];
    const current = values[2];
    const mockOnChange = jest.fn();
 
    render(<GenreSelectComponent genresList={values} currentGenreInput = {current} onSelect={mockOnChange}></GenreSelectComponent>);
    const renderedValue = screen.getByText(current);
    const style = getComputedStyle(renderedValue);
    expect(style.fontWeight).toBe('bold');
  });

  test('calls onChange on click', () => {
    const values = ['All', 'Documentary', 'Comedy', 'Horror', 'Crime'];
    const current = values[0];
    const genreToSelect = values[3];
    const mockOnChange = jest.fn();

    const {getByText} = render(<GenreSelectComponent genresList={values} currentGenreInput = {current} onSelect={mockOnChange}></GenreSelectComponent>);

    fireEvent.click(getByText(genreToSelect));

    expect(mockOnChange).toHaveBeenCalledWith(genreToSelect);
  });
