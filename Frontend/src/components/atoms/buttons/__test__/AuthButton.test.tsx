import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import AuthButton from '../AuthButton';

test('renders AuthButton component with label and style', () => {
  // Arrange
  const label = 'Click me';
  const style = 'custom-style';

  // Act
  const { getByText } = render(<AuthButton label={label} style={style} />);

  // Assert
  const buttonElement = getByText(label);
  expect(buttonElement).toBeInTheDocument();
  expect(buttonElement).toHaveClass(style);
});
