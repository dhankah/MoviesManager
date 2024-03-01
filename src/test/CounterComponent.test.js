import { render, screen, fireEvent } from '@testing-library/react';
import CounterComponent from '../components/CounterComponent.js';


test('renders value from props', () => {
  const initialValue = 101;
  const valueToRender = 'Count: 101';
  const {getByText} = render(<CounterComponent initialValue = {initialValue}></CounterComponent>);
  const renderedValue = getByText(valueToRender);
  expect(renderedValue).toBeInTheDocument();
});

test('decrements on click', () => {
  const initialValue = 0;
  const valueToRender = 'Count: -1';
  const { getByTestId } = render(<CounterComponent initialValue = {initialValue}></CounterComponent>);
  
  fireEvent.click(getByTestId('decrement-btn'));
  const renderedValue = screen.getByText(valueToRender);
  expect(renderedValue).toBeInTheDocument();
});

test('increments on click', () => {
  const initialValue = 0;
  const valueToRender = 'Count: 1';
  const { getByTestId } = render(<CounterComponent initialValue = {initialValue}></CounterComponent>);
  
  fireEvent.click(getByTestId('increment-btn'));
  const renderedValue = screen.getByText(valueToRender);
  expect(renderedValue).toBeInTheDocument();
});
