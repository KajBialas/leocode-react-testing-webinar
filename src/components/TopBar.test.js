import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TopBar from './TopBar';

afterEach(cleanup);

describe('TopBar Component', () => {
  it('should correctly render component', () => {
    const { getByTestId, getByText } = render(<TopBar text="Hello!" />);

    expect(getByTestId('testid')).toHaveTextContent('Hello!');
    expect(getByText('Hello!')).toHaveClass('topBar');
  });

  it('should match snapshot', () => {
    const { asFragment } = render(<TopBar text="Hello!" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
