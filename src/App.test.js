import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

// it('renders without crashing', () => {
//   shallow(<App />);
// });
//
// it('should match snapshot', () => {
//   const { asFragment } = render(<App/>);
//   expect(asFragment()).toMatchSnapshot();
// });

it('should match snapshot', () => {
  const component = shallow(<App />);
  expect(component).toMatchSnapshot();
});