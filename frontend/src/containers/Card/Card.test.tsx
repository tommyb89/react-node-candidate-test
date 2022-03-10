import { render, screen } from '@testing-library/react';
import { Card } from './Card';

test('renders start text', () => {
  const props = {
    "id": "job-1000",
    "title": "React Developer",
    "location": "London",
    "salary": 75000,
    "type": "Permanent",
    "company": "Acme Company",
    "post_date": "14 days ago",
    "description": "React Developer Circa £75,000 City of London The React Developer will work on a re-platforming of existing products to take advantage … The React Developer will benefit from working in a purely greenfield project",
    "logo": "https://logo.clearbit.com/company.com"
  };
  render(<Card {...props} />);
  const app = screen.getByRole('heading');
  expect(app).toHaveTextContent('React Developer');
  expect(app).toMatchSnapshot();
});
