import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'  
import Search, { Button } from '../../components/Search'

describe('<Search />', () => {
    test('renders component', () => {
        render(<Search />) 
        expect(screen.getByRole('button')).toBeInTheDocument()
        expect(screen.getByRole('textbox')).toBeInTheDocument()
    })

    describe('form component', () => {
        test('onclick function fires on form submit', () => {
            const mockSubmit = jest.fn()        
            render(<Search handleSubmit={mockSubmit} />)
            fireEvent.submit(screen.getByTestId("form"))         
            expect(mockSubmit).toHaveBeenCalled()
        })
    })

    describe('textbox component', () => {
        test('onchange function works with text input', () => {
            render(<Search />)
            const input = screen.getByLabelText(/enter a domain/i)            
            fireEvent.change(input, { target: { value: "testvalue" }})
            expect(input.value).toBe("testvalue")
        })
    })
})