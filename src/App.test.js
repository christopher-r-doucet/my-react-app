import { render, screen } from '@testing-library/react';
import App from './App';

test.skip('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

//create a new test that checks the page is displaying "Hello World"
test('renders Hello World', () => {
  render(<App />);
  const helloWorldElement = screen.getByText("Firebase Hosting Setup Complete");
  expect(helloWorldElement).toBeInTheDocument();
});