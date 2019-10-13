import React from 'react';
import { render, fireEvent, wait } from '@testing-library/react';
import DecoderForm from '../decoder_form';
import axios from 'axios';

jest.mock('axios');
axios.post = jest.fn(() => Promise.resolve({
  status: 200,
  data: 'hello'
}),
);

describe('Decoder form', () => {
    test('Check that the component was successfully rendered', () => {
      // Mock
      const { container, findByText } = render(<DecoderForm />);
      // Assest
      findByText(container, 'Message to decode');
    });
    test('Warns about incorrect input', () => {
      // Mock
      const { container, getByLabelText, findByText } = render(<DecoderForm />);
      const input = getByLabelText(/code-input/i);
      // Assest
      fireEvent.change(input, { target: { value: 'a' } });
      findByText(container, 'Only accepts numbers and spaces');
    });
    test('Makes a request to decode a valid string', async () => {
      // Mock
      const { getByLabelText, getByText } = render(<DecoderForm />);
      const input = getByLabelText(/code-input/i);
      const submit = getByLabelText(/submit/i);
      // Assest
      fireEvent.change(input, { target: { value: '13 27 26 5' } });
      fireEvent.click(submit);
      expect(axios.post).toHaveBeenCalled();
      await wait(() => getByText('hello'));
    });
  });
  