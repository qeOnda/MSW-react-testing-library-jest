import React from 'react';
import { 
    render, 
    screen, 
    fireEvent,
    waitFor
} from '@testing-library/react'
import '@testing-library/jest-dom'  
import Search, { Button } from '../../components/Search'



describe('<Search />', () => {
    describe('form component', () => {
        test('onclick function fires on form submit', () => {
            const mockSubmit = jest.fn()        
            render(<Search handleSubmit={mockSubmit} />)
            fireEvent.submit(screen.getByTestId("form"))         
            expect(mockSubmit).toHaveBeenCalled()
        })
    })

    describe('textbox component', () => {
        test('text input works', async () => {
            render(<Search />)
        
            const input = screen.getByRole('textbox')   
            expect(input.value).toBe("")
            fireEvent.change(input, { target: { value: "testvalue" }})        

            await waitFor(() => expect(input.value).toBe("testvalue"))
            
            // screen.debug()
        })
    })
})