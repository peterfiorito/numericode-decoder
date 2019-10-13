import React from 'react';
import { render, findByText } from '@testing-library/react';
import App from '../App';

describe('Build project', () => {
    test('Check that the app was successfully rendered', async () => {
      // Mock
      render(<App />);
      findByText('Trussle DeC0d3R')
    });
  });
  