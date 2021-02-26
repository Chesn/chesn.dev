import React from 'react'
import styled from '@emotion/styled'

import { SEO } from '@/components'

const Main = styled.div`
  margin: 60px;
`
const Title = styled.h1`
  margin: 0;
  color: #555;
  font-size: 16px;
  font-weight: 600;
`

export default function Home () {
  return (
    <Main>
      <SEO
        title="Home"
      />

      <Title>Hello from <a href="https://github.com/Chesn">#Chesn</a></Title>
    </Main>
  )
}
