import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import Parklist from './ParkList';

describe('All Dog Parks page', () => {
  //TODO: update these tests once the data is no longer hardcoded
  it('should render text "Fun dog park"', () => {
    render(<Parklist />);

    const dogParksString = screen.getByText('Fun dog park');
    expect(dogParksString).toBeInTheDocument();
  });

  it('should render text "Great park for puppies"', () => {
    render(<Parklist />);

    const dogParksString = screen.getByText('Great park for puppies');
    expect(dogParksString).toBeInTheDocument();
  });
});