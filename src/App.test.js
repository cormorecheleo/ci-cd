import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import RegistrationForm from './Registration/RegistrationForm';

/** 
test('renders learn react link', () => {
  render(<App />);
  // const linkElement = screen.getByText(/learn react/i);
  const linkElement = screen.getByRole('link');
  expect(linkElement).toBeInTheDocument();
  expect(linkElement).toHaveTextContent(/learn react/i);
});

test('renders code app', () => {
  render(<App />);
  const codeAppElement = screen.getByTestId('code-app');
  expect(codeAppElement).toBeInTheDocument();
  expect(codeAppElement).toHaveTextContent("src/App.js");
});

test('check counter on click me button', () => {
  render(<App />);
  const button = screen.getByRole('button');
  const counter = screen.getByTestId('count')
  expect(button).toBeInTheDocument();
  expect(counter).toBeInTheDocument();
  expect(counter).toHaveTextContent("0");
  fireEvent.click(button);
  expect(counter).toHaveTextContent("1");
});
*/

test('render save button', () => {
  render(<App/>);
  const button = screen.getByRole('button');
  expect(button).toContainHTML("SAVE")
});

test('render div container field', () => {
  const {container} = render(<App/>);
  const div = container.getElementsByClassName('App');
  console.log(div);
  expect(div.toBeInTheDocument);
});

test('RegistrationForm fields', () => {
  render(<RegistrationForm/>);
  const firstName = screen.getByPlaceholderText("First Name");
  const lastName = screen.getByPlaceholderText("Last Name");
  const email = screen.getByPlaceholderText("Email");
  const date = screen.getByPlaceholderText("Date of Birth");
  const city = screen.getByPlaceholderText("City");
  const postalCode = screen.getByPlaceholderText("Postal Code");

  const fields = {firstName, lastName, email, date, city, postalCode};

  for (let index = 0; index < fields.length; index++) {
    expect(field).toBeInTheDocument();
  };
});

