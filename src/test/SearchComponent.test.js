import { render, screen, fireEvent } from '@testing-library/react';
import SearchComponent from '../components/SearchComponent.js';

test('renders value from props', () => {
    const searchValue = "Search!";
    const mockOnChange = jest.fn();

    render(<SearchComponent defaultValue = {searchValue} onSearch = {mockOnChange}></SearchComponent>);
   
    const renderedValue = screen.getByDisplayValue(searchValue)
    expect(renderedValue).toBeInTheDocument();
  });

test('calls onChange on click', () => {
    const initialValue = "Search!";
    const searchValue = "Good movies";

    const mockOnChange = jest.fn();
    const {getByRole} = render(<SearchComponent defaultValue = {initialValue} onSearch = {mockOnChange}></SearchComponent>);
    
    const inputNode = screen.getByDisplayValue(initialValue)

    fireEvent.change(inputNode, { target: { value: searchValue } });
    fireEvent.click(getByRole('button'));

    expect(mockOnChange).toHaveBeenCalledWith(searchValue);
  });
  
  test('calls onChange on enter', () => {
    const initialValue = "Search!";
    const searchValue = "Good movies";

    const mockOnChange = jest.fn();
    render(<SearchComponent defaultValue = {initialValue} onSearch = {mockOnChange}></SearchComponent>);
    
    const inputNode = screen.getByDisplayValue(initialValue)
    
    inputNode.focus();
    fireEvent.change(inputNode, { target: { value: searchValue } });
    fireEvent.keyDown(inputNode, {
        key: "Enter",
        code: "Enter",
        keyCode: 13,
        charCode: 13});

    expect(mockOnChange).toHaveBeenCalledWith(searchValue);
  });
