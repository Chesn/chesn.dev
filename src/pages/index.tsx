import React from 'react'
import { graphql } from 'gatsby'
import dayjs from 'dayjs'

import { Layout, SEO } from '@/components'

type Props = {
  data: {
    allMarkdownRemark: {
      nodes: Array<{
        id: string;

        frontmatter: {
          title: string;
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
      <SEO
        title="Home"
      />

      <div className="mx-auto py-12 max-w-screen-md">
        <ul>
          {list?.map(({
            id,
            frontmatter: {
              title, description, date
            },
            fields: {
              slug
            }
          }) => (
            <li
              key={id}>
              <a href={slug}>
                {title} - {description} @ {dayjs(date).format('YYYY-MM-DD')}
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
          description
          date
        }
        fields {
          slug
        }
      }
    }
  }
`
