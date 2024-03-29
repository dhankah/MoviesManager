import { render, screen, fireEvent } from '@testing-library/react';
import SearchComponent from '../components/SearchComponent.js';
import { useOutletContext } from 'react-router-dom'; 


const query = 'What do you want to watch';

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useOutletContext: () => ['query', jest.fn]
}));

test('calls onChange on click', () => {
    const searchValue = 'Good movies';

    const {getByRole} = render(<SearchComponent/>);
    
    const inputNode = screen.getByPlaceholderText(query)

    fireEvent.change(inputNode, { target: { 
    value: searchValue } });
    fireEvent.click(getByRole('button'));
    

    const { handleSearchSubmit } = useOutletContext();

  expect(handleSearchSubmit).toHaveBeenCalledWith(searchValue);
  });
  
  test('calls onChange on enter', () => {
    const searchValue = 'Good movies';

     render(<SearchComponent/>);
    
    const inputNode = screen.getByPlaceholderText(query)
    inputNode.focus();
    fireEvent.change(inputNode, { target: { value: searchValue } });
    fireEvent.keyDown(inputNode, {
        key: "Enter",
        code: "Enter",
        keyCode: 13,
        charCode: 13});

    const [, handleSearchSubmit] = useOutletContext();

    expect(handleSearchSubmit).toHaveBeenCalledWith(searchValue);
  });
