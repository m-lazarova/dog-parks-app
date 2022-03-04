import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import MainNavigation from './MainNavigation';

describe('MainNavigation', () => {
  it('should render text "The React Dog Parks"', () => {
    render(<MainNavigation />);

    const dogParksString = screen.getByText('The React Dog Parks');
    expect(dogParksString).toBeInTheDocument();
  });

  it('should render text "All Dog Parks"', () => {
    render(<MainNavigation />);

    const dogParksString = screen.getByText('All Dog Parks');
    expect(dogParksString).toBeInTheDocument();
  });

  it('should render text "Add a New Dog Park"', () => {
    render(<MainNavigation />);

    const dogParksString = screen.getByText('Add a New Dog Park');
    expect(dogParksString).toBeInTheDocument();
  });
});