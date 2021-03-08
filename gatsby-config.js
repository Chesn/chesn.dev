const path = require('path')

module.exports = {
  flags: {
    FAST_DEV: true,
    DEV_SSR: false
  },
  siteMetadata: {
    title: 'Chesn\'s Personal Website',
    author: {
      name: 'Chesn',
      summary: 'a web developer with passion.'
    },
    description: 'A small place showing my thoughts.',
    siteUrl: 'https://chesn.dev',
    social: {
      twitter: 'chesn_cc'
    }
  },
  plugins: [
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        postCssPlugins: [
          require('tailwindcss'),
          require('./tailwind.config.js') // Optional: Load custom Tailwind CSS configuration
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-alias-imports',
      options: {
        alias: {
          '@': path.resolve(__dirname, './src/')
        }
      }
    },
    'gatsby-plugin-netlify-cms',
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Chesn Dev',
        short_name: 'Chesn',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#000000',
        display: 'minimal-ui',
        icon: 'src/images/icon-black.png'
      }
    },
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/'
      },
      __key: 'images'
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/'
      },
      __key: 'pages'
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: path.join(__dirname, './posts'),
        name: 'blog'
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 630
            }
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1.0725rem'
            }
          },
          {
            resolve: 'gatsby-remark-table-of-contents',
            options: {
              exclude: 'Table of Contents',
              tight: false,
              ordered: false,
              fromHeading: 1,
              toHeading: 6,
              className: 'table-of-contents'
            }
          },
          {
            resolve: 'gatsby-remark-highlights',
            options: {
              scopePrefix: 'syntax--',
              codeWrap: {
                className: 'one-light'
              }
            }
          },
          'gatsby-remark-autolink-headers',
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants'
        ]
      }
    }
  ]
}
