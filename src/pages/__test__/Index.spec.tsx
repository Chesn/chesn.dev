import React from 'react'
import renderer from 'react-test-renderer'
import { useStaticQuery } from 'gatsby'

import Index from '../index'

beforeEach(() => {
  (useStaticQuery as jest.Mock).mockReturnValue({
    site: {
      siteMetadata: {
        title: "Chesn's Personal Website",
        description: 'A small place showing my thoughts.',
        social: {
          twitter: 'chesn_cc'
        }
      }
    }
  })
})

describe('Index Page', () => {
  it('renders correctly', () => {
    const staticProps = {
      data: {
        allMarkdownRemark: {
          nodes: [{
            id: '1',
            frontmatter: {
              title: 'hello',
              category: 'essays',
              description: 'welcome',
              date: '2021-03-05'
            },
            fields: {
              slug: '/hello/'
            }
          }]
        }
      }
    }

    const tree = renderer.create(<Index {...staticProps} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
