import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the landing page', () => {
  render(<App />);
  const nameElement = screen.getByText(/Guilherme Emerick/i);
  expect(nameElement).toBeInTheDocument();
});
