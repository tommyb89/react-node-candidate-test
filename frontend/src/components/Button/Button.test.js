import { render, screen } from '@testing-library/react';
import { Button } from './Button';

it('renders Button component', () => {
	render(<Button/>);
	screen.getByText(/Apply/i);
});
