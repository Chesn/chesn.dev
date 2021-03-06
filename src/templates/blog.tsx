import React from 'react'
import { graphql } from 'gatsby'

import { Layout, SEO } from '@/components'

import './blog.scss'

type RemarkProps = {
  fields: {
    slug: string;
  };
  frontmatter: {
    title: string;
  }
}

type Props = {
  data: {
    previous: RemarkProps;
    next: RemarkProps;
    markdownRemark: {
      id: string;
      frontmatter: {
        title: string;
        date: string;
      };
      html: string;
    };
    site: {
      siteMetadata?: {
        title: string;
      }
    };
  };
}

export default function BlogPostTemplate ({
  data
}: Props) {
  const {
    html, frontmatter: {
      title, date
    }
  } = data.markdownRemark
  // const { previous, next } = data

  return (
    <Layout>
      <SEO title={title} />

      <div className="mt-4 md:mt-8 mx-auto py-8 md:py-12 max-w-screen-md">
        <article
          itemScope
          itemType="http://schema.org/Article">

          <header className="text-center">
            <h1 className="text-2xl text-gray-900 font-bold">{title}</h1>
            <p className="mt-2 text-sm text-gray-400">{date}</p>
          </header>

          <section
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: html }}
            itemProp="articleBody"
          />
        </article>
        {/* <nav className="blog-post-nav">
          <ul
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              listStyle: 'none',
              padding: 0
            }}>
            <li>
              {previous && (
                <Link to={'/blog' + previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={'/blog' + next.fields.slug} rel="next">
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>
          </ul>
        </nav> */}
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "YYYY-MM-DD")
        description
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
        category
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
        category
      }
    }
  }
`
