import React from 'react';
import { render, screen } from '@testing-library/react'

import Details from './Details';

it('renders Details component', () => {
	const props = {
		location: 'London',
		salary: 50000,
		type: 'Permanent',
		company: 'Acme'
	};
	render(<Details { ...props }/>);
	const details = screen.getByText('London');
	expect(details).toBeInTheDocument();
	expect(details).toMatchSnapshot();
});
