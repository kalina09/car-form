import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Form from '../Form';

describe('Test the Form Component', () => {
  test('render the form with submit button', async () => {
    render(<Form />);
    const buttonList = await screen.findAllByRole('button');
    expect(buttonList).toHaveLength(1);
  });

  test('email input field should accept email', () => {
    render(<Form />);
    const email = screen.getByPlaceholderText('johndoe@gmail.com');
    userEvent.type(email, 'ivan');
    expect(email.value).not.toMatch('ivan@gmail.com');
  });

  test('production year input should have type number', () => {
    render(<Form />);
    const year = screen.getByPlaceholderText('2018');
    expect(year).toHaveAttribute('type', 'number');
  });
});
