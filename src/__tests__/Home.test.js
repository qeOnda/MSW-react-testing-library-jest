import React from 'react';
import Home from '../Home';
import { WhoisGetter } from '../services/WhoisGetter'
import '@testing-library/jest-dom'
import axios from 'axios';
import { render, screen, waitFor } from '@testing-library/react';

// const axios = require('axios')

jest.mock('axios')
 
describe('<Home />', () => {
  describe('Home component renders', () => {
    test('page should contain a textbox', () => {
      render(<Home />);  
      
      expect(screen.getByRole('textbox')).toBeInTheDocument();
      expect(screen.queryByText(/this is a test/)).toBeNull();
    });
  })

  describe('Test mocks', () => {
    test('test returns undefined by default', () => {
      const append = jest.fn()
  
      let result = append("foo")
  
      expect(result).toBeUndefined()
      expect(append).toHaveBeenCalled()
      expect(append).toHaveBeenCalledTimes(1)
      expect(append).toHaveBeenCalledWith("foo")
    });
  })

  describe('mocking api call', () => {
    test('returns api response', async () => {
      axios.get.mockResolvedValue({
        data: [
          {
            userId: 1,
            id: 1,
            title: "My title"
          },
          {
            userId: 2,
            id: 2,
            title: "title: sequel"
          }
        ]
      })

      const title = await WhoisGetter()
      expect(title).toHaveLength(2)
      // expect(title).toContain()
    });
  })
}) 