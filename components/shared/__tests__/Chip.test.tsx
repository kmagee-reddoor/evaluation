import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

import Chip from '../Chip';

// describe('Chip Component', () => {
//   it('renders children correctly', () => {
//     render(<Chip>Test Chip</Chip>);
//     expect(screen.getByText('Test Chip')).toBeInTheDocument();
//   });

//   it('applies default class names', () => {
//     const { container } = render(<Chip>Test Chip</Chip>);
//     expect(container.firstChild).toHaveClass(
//       'rounded-lg bg-neutral-lightest px-2 py-1 text-sm font-semibold text-dark-red transition duration-300 ease-in-out',
//     );
//   });

//   it('applies additional classNames', () => {
//     const className = 'extra-class';
//     const { container } = render(<Chip className={className}>Test Chip</Chip>);
//     expect(container.firstChild).toHaveClass(className);
//   });

//   it('applies cursor-pointer and hover:bg-neutral-lighter when onClick is provided', () => {
//     const handleClick = jest.fn();
//     const { container } = render(
//       <Chip onClick={handleClick}>Clickable Chip</Chip>,
//     );

//     const chipDiv = container.firstChild;
//     expect(chipDiv).toHaveClass('cursor-pointer hover:bg-neutral-lighter');

//     // Test the click event works correctly
//     fireEvent.click(screen.getByText('Clickable Chip'));
//     expect(handleClick).toHaveBeenCalled();
//   });
// });


describe('Chip Component', () => {
  it('renders children correctly', () => {
    render(<Chip>Test Chip</Chip>);
    expect(screen.getByText('Test Chip')).toBeInTheDocument();
  });

  it('applies default styles', () => {
    const { container } = render(<Chip>Styled Chip</Chip>);
    expect(container.firstChild).toHaveClass('rounded-lg bg-neutral-lightest px-2 py-1 text-sm font-semibold text-primary transition duration-300 ease-in-out');
  });

  it('applies custom className', () => {
    render(<Chip className="custom-class">Custom Class</Chip>);
    expect(screen.getByText('Custom Class')).toHaveClass('custom-class');
  });

  it('handles click events', () => {
    const onClickMock = jest.fn();
    render(<Chip onClick={onClickMock}>Clickable Chip</Chip>);
    fireEvent.click(screen.getByText('Clickable Chip'));
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  it('applies hover styles when clickable', () => {
    const { container } = render(<Chip onClick={() => {}}>Hoverable Chip</Chip>);
    expect(container.firstChild).toHaveClass('cursor-pointer hover:bg-neutral-lighter');
  });
});