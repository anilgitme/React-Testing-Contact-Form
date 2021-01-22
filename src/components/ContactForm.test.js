import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ContactForm from './ContactForm';

test('Form renders with no errors', () => {
    render( < ContactForm / >);
})

test('Can fill out and submit the form successfully', () => {
    render( <ContactForm / >);
    const firstName = screen.getByPlaceholderText(/Edd/i);
    const lastName = screen.getByPlaceholderText(/Burke/i);
    const email = screen.getByPlaceholderText(/bluebill1049@hotmail.com/i);

    userEvent.type(firstName, 'Ani');
    userEvent.type(lastName, 'Ramcharran');
    userEvent.type(email, 'anil.gitme@gmail.com');

    const button = screen.getByRole('button');
    userEvent.click(button);

    expect(firstName).toBeInTheDocument();
    expect(lastName).toBeInTheDocument();
    expect(email).toBeInTheDocument();

})