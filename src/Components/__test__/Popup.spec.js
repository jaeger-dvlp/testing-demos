import { cleanup, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import App from '../../App'

const setup = () => render(<App />)
const getPopup = () => screen.getByTestId('popup')

afterEach(() => cleanup)

test('Popup renders correctly', () => {
  setup()

  expect(getPopup()).toBeInTheDocument()
})

test('Popup is have "Apply" button', () => {
  setup()
  const popupElmApplyButton = screen.getByTestId('popup-apply')
  expect(popupElmApplyButton).toBeInTheDocument()
})

test('Popup is have "Close" button', () => {
  setup()
  const popupElmCloseButton = screen.getByTestId('popup-close')
  expect(popupElmCloseButton).toBeInTheDocument()
})

test('Popup is closing after clicking "Close" button', () => {
  setup()
  const popupElmCloseButton = screen.getByRole('button', {
    name: /Close/i
  })
  userEvent.click(popupElmCloseButton)
  expect(getPopup()).toHaveClass('hidden')
})

test("Popup's body changes after clicking 'Apply' button", () => {
  setup()
  const popupElmApplyButton = screen.getByRole('button', {
    name: /Apply/i
  })
  userEvent.click(popupElmApplyButton)
  expect(getPopup()).toHaveTextContent(/You have successfully applied./i)
})
