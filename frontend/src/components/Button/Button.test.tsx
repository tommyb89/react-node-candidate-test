import React from 'react';
import { render, screen } from '@testing-library/react'

import Button from './Button';

test('renders button with apply text', () => {
  render(<Button />);
  //const linkElement = 
  expect(screen.getByText(/Apply/i)).toBeInTheDocument();
	expect(screen.getByRole('button')).toHaveTextContent('Apply');
});