import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Counter from './Counter';

afterEach(cleanup);

describe('Counter Component', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(<Counter />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("should correctly increments", () => {
    const { getByTestId, getByText } = render(<Counter />);
    fireEvent.click(getByText('+'));
    expect(getByTestId('countervalue')).toHaveTextContent("1");
  });
});
