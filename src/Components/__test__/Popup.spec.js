/* eslint-disable testing-library/no-render-in-setup */
import { cleanup, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import App from '../../App'

describe('Test Popup presence', () => {
  test('Should render App then Popup must be exists.', () => {
    render(<App />)
    expect(screen.getByTestId('popup')).toBeInTheDocument()
  })
})

describe('Test Popups buttons presence', () => {
  beforeEach(() => render(<App />))
  afterEach(cleanup)

  test('Should Apply button exists', () => {
    expect(screen.getByRole('button', { name: /Apply/i })).toBeInTheDocument()
  })

  test('Should Close button exists', () => {
    expect(screen.getByRole('button', { name: /Close/i })).toBeInTheDocument()
  })
})

describe('Test Popups buttons functionality', () => {
  beforeEach(() => render(<App />))
  afterEach(cleanup)

  test('Should click Apply button then Popup body will change.', () => {
    userEvent.click(screen.getByRole('button', { name: /Apply/i }))
    expect(screen.getByTestId('popup')).toHaveTextContent(
      /You have successfully applied./i
    )
  })

  test('Should click Close button then Popup will close.', () => {
    userEvent.click(screen.getByRole('button', { name: /Close/i }))
    expect(screen.getByTestId('popup')).toHaveClass('hidden')
  })
})
