import React from 'react'
import { Helmet } from 'react-helmet'

type Props = {
  title?: string;
}

export function SEO ({
  title = 'Welcome'
}: Props) {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=no, viewport-fit=cover" />
      <title>{title} - Chesn Dev</title>
    </Helmet>
  )
}
