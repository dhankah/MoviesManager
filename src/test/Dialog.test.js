import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Dialog from '../components/Dialog'; 


test('renders title and children', () => {
    const title = 'Test Title';
    const content = 'Test Content';
    const { getByText } = render(
      <Dialog title={title}>
        <p>{content}</p>
      </Dialog>
    );

    expect(getByText(title)).toBeInTheDocument();
    expect(getByText(content)).toBeInTheDocument();
  });

  test('calls onClose when close button is clicked', () => {
    const onClose = jest.fn();
    const { getByText } = render(<Dialog onClose={onClose} />);

    fireEvent.click(getByText('Close'));
    expect(onClose).toHaveBeenCalledTimes(1);
  });
