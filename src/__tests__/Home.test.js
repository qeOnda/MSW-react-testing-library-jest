import React from 'react';
import Home from '../Home';
import '@testing-library/jest-dom'
import axios from 'axios';
import { render, screen, waitFor } from '@testing-library/react';


 
describe('Home', () => {
  test('render component and find textbox', () => {
    render(<Home />);  
    
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.queryByText(/this is a test/)).toBeNull();
  });
}) 