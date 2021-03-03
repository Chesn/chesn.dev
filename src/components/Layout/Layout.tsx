import React from 'react'

import { Header } from './Header'
import { Footer } from './Footer'

type Props = {
  vertical?: boolean;
  children?: React.ReactNode;
}

export function Layout ({
  children, vertical = false
}: Props) {
  return (
    <div className="relative h-screen">
      <Header
        layout={vertical ? 'vertical' : 'horizontal'}
      />

      {children}

      <Footer />
    </div>
  )
}
