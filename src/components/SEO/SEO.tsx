import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Helmet } from 'react-helmet'

type Meta = {
  name: string;
  content: any;
  property?: undefined;
} | {
  property: string;
  content: any;
  name?: undefined;
}

type Props = {
  description?: string;
  lang?: string;
  meta?: Meta[];
  title?: string;
}

type PureSEOProps = Props & {
  data: {
    site: {
      siteMetadata: {
        title?: string;
        description?: string;
        social?: {
          twitter: string;
        }
      }
    }
  }
}

export function PureSEO ({
  title = 'Welcome',
  lang = 'en',
  meta = [],
  description = '',
  data
}: PureSEOProps) {
  const { site } = data
  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title

  return (
    <Helmet
      htmlAttributes={{
        lang
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : undefined}
      meta={[
        {
          name: 'description',
          content: metaDescription
        },
        {
          property: 'og:title',
          content: title
        },
        {
          property: 'og:description',
          content: metaDescription
        },
        {
          property: 'og:type',
          content: 'website'
        },
        {
          name: 'twitter:card',
          content: 'summary'
        },
        {
          name: 'twitter:creator',
          content: site.siteMetadata?.social?.twitter || ''
        },
        {
          name: 'twitter:title',
          content: title
        },
        {
          name: 'twitter:description',
          content: metaDescription
        }
      ].concat(meta)}
    />
  )
}

export function SEO (props: Props) {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            social {
              twitter
            }
          }
        }
      }
    `
  )

  return <PureSEO {...props} data={data} />
}
