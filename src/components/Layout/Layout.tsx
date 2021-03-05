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
    <div className="flex flex-col relative min-h-screen">
      <Header
        layout={vertical ? 'vertical' : 'horizontal'}
      />

      <div className="flex-auto container mx-auto px-4 md:px-8">
        {children}
      </div>

      <Footer />
    </div>
  )
}
