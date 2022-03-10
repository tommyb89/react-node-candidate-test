import React from 'react';
import { render, screen } from '@testing-library/react'

import Title from './Title';

it('renders Title component', () => {
	const props = {
		title: 'React Developer in London £90K',
	};
	render(<Title { ...props }/>);
	const title = screen.getByText(/React Developer/)
	expect(title).toBeInTheDocument();
	expect(title).toMatchSnapshot();
});
