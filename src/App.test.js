import { render, screen } from '@testing-library/react';
import App from './App';
import { MiniCard } from './components/MiniCard';

test('renders learn react link', () => {
  render(<App />);
  const TestInput = screen.getByPlaceholderText("Buscar...");
  expect(TestInput).toBeInTheDocument();
});

describe('testing mini card render', () => {
  it('should render MiniCard', () => {
    render(<MiniCard />).debug();
    const InputTest = screen.getAllByRole()
    expect(InputTest).toBe();
  });
});
