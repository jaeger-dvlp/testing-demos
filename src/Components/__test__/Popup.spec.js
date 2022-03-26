import { cleanup, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import App from '../../App'

const setup = () => render(<App />)
const getPopup = () => screen.getByTestId('popup')
const getApplyButton = () => screen.getByRole('button', { name: /Apply/i })
const getCloseButton = () => screen.getByRole('button', { name: /Close/i })

afterEach(() => cleanup)

test('Popup renders correctly', () => {
  setup()
  expect(getPopup()).toBeInTheDocument()
})

test('Popup is have "Apply" button', () => {
  setup()
  expect(getApplyButton()).toBeInTheDocument()
})

test('Popup is have "Close" button', () => {
  setup()
  expect(getCloseButton()).toBeInTheDocument()
})

test("Popup's body changes after clicking 'Apply' button", () => {
  setup()
  userEvent.click(getApplyButton())
  expect(getPopup()).toHaveTextContent(/You have successfully applied./i)
})

test('Popup is closing after clicking "Close" button', () => {
  setup()
  userEvent.click(getCloseButton())
  expect(getPopup()).toHaveClass('hidden')
})
