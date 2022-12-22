import { fireEvent, render, screen } from '@testing-library/react';
import Login from './components/Login';

test('username input should be rendered', () => {
	render(<Login />);
	const usernameInputEl = screen.getByPlaceholderText(/username/i);
	expect(usernameInputEl).toBeInTheDocument();
});

test('username input should be empty', () => {
	render(<Login />);
	const usernameInputEl = screen.getByPlaceholderText(/username/i);
	expect(usernameInputEl.value).toBe('');
});
test('username input should change', () => {
	render(<Login />);
	const usernameInputEl = screen.getByPlaceholderText(/username/i);
	const testValue = 'test';

	fireEvent.change(usernameInputEl, { target: { value: testValue } });
	expect(usernameInputEl.value).toBe(testValue);
});

test('password input should be rendered', () => {
	render(<Login />);
	const passwordInputEl = screen.getByPlaceholderText(/password/i);
	expect(passwordInputEl).toBeInTheDocument();
});

test('password input should be empty', () => {
	render(<Login />);
	const passwordInputEl = screen.getByPlaceholderText(/password/i);
	expect(passwordInputEl.value).toBe('');
});
test('password input should change', () => {
	render(<Login />);
	const passwordInputEl = screen.getByPlaceholderText(/password/i);
	const testValue = 'test';

	fireEvent.change(passwordInputEl, { target: { value: testValue } });
	expect(passwordInputEl.value).toBe(testValue);
});

test('login button should be rendered', () => {
	render(<Login />);
	const buttonEl = screen.getByRole('button');
	expect(buttonEl).toBeInTheDocument();
});

test('login button should be disabled', () => {
	render(<Login />);
	const buttonEl = screen.getByRole('button');
	expect(buttonEl).toBeDisabled();
});

test('login button should not be disabled when inputs exits', () => {
	render(<Login />);
	const buttonEl = screen.getByRole('button');
	const usernameInputEl = screen.getByPlaceholderText(/username/i);
	const passwordInputEl = screen.getByPlaceholderText(/password/i);

	fireEvent.change(usernameInputEl, { target: { value: 'test' } });
	fireEvent.change(passwordInputEl, { target: { value: 'test' } });
	expect(buttonEl).not.toBeDisabled();
});

test('loading should not be rendered', () => {
	render(<Login />);
	const buttonEl = screen.getByRole('button');
	expect(buttonEl).not.toHaveTextContent('Loading...');
});

test('loading should be rendered when clicked', () => {
	render(<Login />);
	const buttonEl = screen.getByRole('button');
	const usernameInputEl = screen.getByPlaceholderText(/username/i);
	const passwordInputEl = screen.getByPlaceholderText(/password/i);

	const testValue = 'test';

	fireEvent.change(usernameInputEl, { target: { value: testValue } });
	fireEvent.change(passwordInputEl, { target: { value: testValue } });
    fireEvent.click(buttonEl);
	expect(buttonEl).toHaveTextContent('Loading...');
});

test('error message should be invisable', () => {
	render(<Login />);
	const errorEl = screen.getByTestId('error');
	expect(errorEl).not.toBeVisible();
});
