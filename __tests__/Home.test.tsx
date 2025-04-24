import { render, screen } from '@testing-library/react'
import Home from '../src/app/page'

describe('Home page', () => {
  it('renders a heading', () => {
    render(<Home />)
    const heading = screen.getByRole('heading', {
      name: /welcome to my app/i,
    })
    expect(heading).toBeInTheDocument()
  })
})
