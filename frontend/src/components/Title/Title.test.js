import { render, screen } from '@testing-library/react';
import { Title } from './Title';

it('renders Title component', () => {
	render(<Title title="React Developer in London £90K"/>);
	screen.getByText(/React Developer in London £90K/i);
});
