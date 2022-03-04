/* eslint-disable react/jsx-key */
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import MainNavigation from './MainNavigation';
import renderer from 'react-test-renderer';
import Link from 'next/link';

describe('MainNavigation', () => {
  describe('should render text', () => {
    const textStrings = [
      'The React Dog Parks',
      'All Dog Parks',
      'Add a New Dog Park'
    ];

    it.each(textStrings)('%s correctly', (textString) => {
      render(<MainNavigation />);
      
      const str = screen.getByText(textString);
      expect(str).toBeInTheDocument();
    });
  });

  describe('Links', () => {
    const links = [
      <Link href='/'>The React Dog Parks</Link>,
      <Link href='/all-dog-parks'>All Dog Parks</Link>,
      <Link href='/new-dog-park'>Add a New Dog Park</Link>
    ]
    it('render correctly', () => {
      const tree = renderer.create(links).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
});