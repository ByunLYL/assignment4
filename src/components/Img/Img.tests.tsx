import { render, screen } from '@testing-library/react'
import Img from './Img'

test('renders the image component with src and alt', () => {
  render(<Img src="test-image.jpg" alt="Test Image" />)
  const imageElement = screen.getByAltText(/Test Image/i)
  expect(imageElement).toBeInTheDocument()
  expect(imageElement).toHaveAttribute('src', 'test-image.jpg')
})
