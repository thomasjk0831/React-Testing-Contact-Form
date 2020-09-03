import React from 'react'
import { render, screen, fireEvent, getByTestId } from '@testing-library/react'
import ContactForm from './ContactForm'



test('can submit a form', async()=>{
    render(<ContactForm />)
    const firstNameInput = screen.getByLabelText(/first name*/i)
    const lastNameInput = screen.getByLabelText(/last name*/i)
    const emailInput = screen.getByLabelText(/email*/i)
    const msgInput = screen.getByLabelText(/message/i)

    fireEvent.change(firstNameInput, {target : {value: 'thomas'}})
    fireEvent.change(lastNameInput, {target: {value: 'kim'}})
    fireEvent.change(emailInput, {target: {value: 'sg@gmail.com'}})
    fireEvent.change(msgInput, {target: {value: 'I am a student at Lambda'}})

    const buttonSubmit = screen.getByTestId(/submit/i)
    fireEvent.click(buttonSubmit)
    
     const nameFirst = await screen.findByText(/thomas/i)
     const nameLast = await screen.findByText(/kim/i)
     const email = await screen.findByText(/sg@gmail.com/i)
     const ms = await screen.findByText(/I am a student at Lambda/i)
     
     expect(nameFirst).toBeInTheDocument()
     expect(nameLast).toBeInTheDocument()
     expect(email).toBeInTheDocument()
     expect(ms).toBeInTheDocument()

})

