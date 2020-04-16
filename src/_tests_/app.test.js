import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';
import { queryByText } from '@testing-library/react';

it('It loads initial react app entry point', () => {
    rtl.render(<App />
        );
});

it('renders "You have rendered properly"', () => {

    const element = rtl.render(<App />).queryByText(/You have rendered properly!/i);
    expect(element).toBeInTheDocument();
})