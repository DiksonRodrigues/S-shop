import { render } from '@testing-library/react';
import Header from './Components/Header';
import Login from './pages/Login';

test('sum', () => {
  const { getByText } = render(<Header/>)

  expect(getByText("S-SHOP")).toBeTruthy()
})

test('text', () => {
  const { getByText } = render(<Login/>)

  expect(getByText("Fazer login")).toBeTruthy()
})