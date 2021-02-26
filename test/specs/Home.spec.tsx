import React from 'react'
import { render } from '@testing-library/react'

import Home from '@/pages'

describe('Index Page', () => {
  it('should have welcomes', () => {
    const { container } = render(<Home />)
    const title = container.querySelector('h1')
    const textContent = title?.textContent

    expect(textContent).toBe('Hello from #Chesn')
  })
})
