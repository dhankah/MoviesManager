import SortControl from '../components/SortControl.js';
import { render, fireEvent } from '@testing-library/react';


test('renders value from props', () => {
  const valueToRender = 'Title';
  const {getByText} = render(<SortControl currentSortOptionInput = 'Title' handleSelect = {() => console.log()}></SortControl>);
  const renderedValue = getByText(valueToRender);
  expect(renderedValue).toBeInTheDocument();
});

test('calls onSelect on click', () => {
    const targetValue = 'Release Date';

    const mockOnChange = jest.fn();
    const {getByTestId} = render(<SortControl currentSortOptionInput = 'Title' handleSelect = {mockOnChange}></SortControl>);

    fireEvent.change(getByTestId('select'), { target: { value: targetValue } });

    expect(mockOnChange).toHaveBeenNthCalledWith(1, targetValue);
  });


