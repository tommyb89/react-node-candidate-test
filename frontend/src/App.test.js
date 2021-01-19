// import React from 'react';
// import { shallow } from 'enzyme';

// import App from './App';

// it('renders without crashing', () => {
// 	const result = shallow(<App/>);
// 	const html = <div className="app"/>;
// 	expect(result).toContainReact(html);
// });


import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Starting using/i);
  expect(linkElement).toBeInTheDocument();
});
