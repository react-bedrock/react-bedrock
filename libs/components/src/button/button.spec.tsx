import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { Button } from './button';

describe('<Button />', () => {
  it('should render successfully', () => {
    // arrange + act
    const { baseElement } = render(<Button />);

    // assert
    expect(baseElement).toBeInTheDocument();
  });

  it('should render provided text', () => {
    // arrange
    const buttonText = 'MockText';

    // act
    render(<Button>{buttonText}</Button>);
    const buttonElement = screen.getByText(RegExp(buttonText));

    // assert
    expect(buttonElement).toBeInTheDocument();
  });
});
