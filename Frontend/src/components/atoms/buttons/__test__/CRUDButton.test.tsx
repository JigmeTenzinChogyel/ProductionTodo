// CRUDButton.test.tsx
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import CRUDButton from '../CRUDButton';
import '@testing-library/jest-dom/extend-expect';


test('renders CRUDButton component with label and style', () => {
  // Arrange
  const label = 'Add';
  const style = 'custom-style';
  const onClickMock = jest.fn();

  // Act
  const { getByText, container } = render(<CRUDButton btnLabel={label} btnStyle={style} onClick={onClickMock} />);

  // Assert
  const buttonElement = getByText(label);
  expect(buttonElement).toBeInTheDocument();
  expect(buttonElement).toHaveClass(style);
  

  // Simulate a button click and check if the onClick function is called
  fireEvent.click(buttonElement);
  expect(onClickMock).toHaveBeenCalled();

  // You can also check other attributes or styles if needed
  // For example, you might want to check if the button has the correct type attribute
    expect((container.querySelector('button') as HTMLElement).getAttribute('type')).toBe('button');
});
