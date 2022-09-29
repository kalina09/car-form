import { render, screen } from '@testing-library/react';
import App from './App';

test('form header renders in the document', () => {
  render(<App />);
  const linkElement = screen.getByText(/Sell Your Car/i);
  expect(linkElement).toBeInTheDocument();
});

test('render form component in the document', () => {
  const component = render(<App />);
  const childElement = component.getByLabelText('Your Name:');
  expect(childElement).toBeInTheDocument();
});
