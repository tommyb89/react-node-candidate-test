import React from 'react';
import { render, screen } from '@testing-library/react'

import Description from './Description';

it('renders Description component', () => {
	const props = {
		description: "This is generic description",
	};
	render(<Description { ...props }/>);
	const desc = screen.getByText(/This is generic description/);
	expect(desc).toBeInTheDocument();
	expect(desc).toMatchSnapshot();
});