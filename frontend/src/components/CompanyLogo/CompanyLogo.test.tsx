import React from 'react';
import { render, screen } from '@testing-library/react'

import CompanyLogo from './CompanyLogo';

it('renders CompanyLogo component', () => {
	const props = {
		logo: "http://host.com/photo.jpg",
		company: "acme"
	};
	render(<CompanyLogo {...props} />);
	const image = screen.getByRole('img');
	expect(image).toHaveAttribute('src', 'http://host.com/photo.jpg');
	expect(image).toHaveAttribute('alt', 'acme');
	expect(image).toMatchSnapshot();

});
