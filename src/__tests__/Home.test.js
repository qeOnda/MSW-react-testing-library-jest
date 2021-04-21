import React from 'react';
import Home from '../Home';
import { WhoisGetter } from '../services/WhoisGetter';
import '@testing-library/jest-dom';
import { 
  render, 
  screen, 
  waitFor, 
  fireEvent
} from '@testing-library/react';
import { setupServer } from 'msw/node';
import { handlers} from '../mocks/handlers'




describe('<Home />', () => {
  const server = setupServer(...handlers)

  beforeAll(() => server.listen())
  afterAll(() => server.close())
  afterEach(() => server.resetHandlers())

  test('gets domain information', async () => {
    render(<Home />)
    const input = screen.getByRole('textbox')   
    fireEvent.change(input, { target: { value: "example.com" }})  
    fireEvent.submit(screen.getByTestId("form"))         
    await waitFor(() => expect(screen.getByText(/example.com/i)).toBeInTheDocument())
    
    screen.debug()
  })
}) 
