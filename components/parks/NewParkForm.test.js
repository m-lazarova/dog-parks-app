/* eslint-disable react/jsx-key */
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import NewParkForm from './NewParkForm';

describe('NewParkForm', () => {
  describe('should contain', () => {
    const textStrings = [
      'Park Name',
      'Park Image',
      'Address',
      'Description'
    ];
    
    it.each(textStrings)('%s label', (textString) => {
      render(<NewParkForm />);
      
      const inputNode = screen.getByLabelText(textString);
      expect(inputNode).toBeInTheDocument();
    });

    it('three checkboxes', async () => {
      render(<NewParkForm />);

      const checkboxes = await screen.findAllByRole('checkbox');
      expect(checkboxes).length === 3;
    })

    it('a button', () => {
      render(<NewParkForm />);
      const button = screen.getByRole('button', {
        name: /Add a new park!/i
      });
      expect(button).toBeInTheDocument();
    });
  });
});