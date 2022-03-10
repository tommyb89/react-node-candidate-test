import { render, screen } from '@testing-library/react';
import App from './App';

test('renders start text', () => {
  render(<App />);
  const app = screen.getByText(/Start building your app here/i);
  expect(app).toBeInTheDocument();
  expect(app).toMatchSnapshot();
});
