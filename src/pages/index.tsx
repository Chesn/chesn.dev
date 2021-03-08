import React from 'react'
import { graphql } from 'gatsby'

import { Layout, SEO } from '@/components'

type Props = {
  data: {
    allMarkdownRemark: {
      nodes: Array<{
        id: string;

        frontmatter: {
          title: string;
          category: string;
          description: string;
          date: string;
        };

        fields: {
          slug: string;
        };
      }>;
    };
  };
}

export default function Home ({
  data
}: Props) {
  const list = data.allMarkdownRemark.nodes

  return (
    <Layout vertical>
      <SEO title="Home" />

      <div className="max-w-screen-md mx-auto py-12">
        <ul>
          {list?.map(({
            id,
            frontmatter: {
              title, category, description, date
            },
            fields: {
              slug
            }
          }) => (
            <li
              key={id}>
              <a href={'/' + category + slug}>
                {title} - {description} @ {date}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: ASC }
      limit: 100
    ) {
      nodes {
        id
        frontmatter {
          title
          category
          description
          date(formatString: "YYYY-MM-DD")
        }
        fields {
          slug
        }
      }
    }
  }
`
