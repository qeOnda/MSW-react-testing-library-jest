import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'  
import Search, { Button } from '../../components/Search'

describe('<Search />', () => {
    test('renders component', () => {
        render(<Search />) 
        
        expect(screen.getByRole('button')).toBeInTheDocument()
    })

    test('onclick ', () => {
        const mockSubmit = jest.fn()        
        render(<Search handleSubmit={mockSubmit} />)
        fireEvent.submit(screen.getByTestId("form"))         
        expect(mockSubmit).toHaveBeenCalled()
    })
})