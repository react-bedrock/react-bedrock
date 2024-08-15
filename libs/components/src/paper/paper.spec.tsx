import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { Paper } from './paper';

describe('<Paper />', () => {
  it('should render successfully', () => {
    // arrange + act
    const { baseElement } = render(<Paper />);

    // assert
    expect(baseElement).toBeInTheDocument();
  });

  it('should render provided text', () => {
    // arrange
    const paperText = 'MockText';

    // act
    render(<Paper>{paperText}</Paper>);
    const paperElement = screen.getByText(RegExp(paperText));

    // assert
    expect(paperElement).toBeInTheDocument();
  });
});
