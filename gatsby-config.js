require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const prismicHtmlSerializer = require('./src/gatsby/htmlSerializer')
// const prismicLinkResolver = require('./src/gatsby/linkResolver')

const website = require('./config/website')

const pathPrefix = website.pathPrefix === '/' ? '' : website.pathPrefix

module.exports = {
  /* General Information */
  pathPrefix: website.pathPrefix,
  siteMetadata: {
    siteUrl: website.url + pathPrefix, // For gatsby-plugin-sitemap
    pathPrefix,
    banner: website.logo,
    ogLanguage: website.ogLanguage,
    author: website.author,
    twitter: website.twitter,
    facebook: website.facebook,
  },
  /* Plugins */
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-emotion',
    `gatsby-plugin-image`,
    'gatsby-plugin-catch-links',
    // {
    //   resolve: `gatsby-source-airtable`,
    //   options: {
    //     apiKey: `${process.env.AIRTABLE_API_KEY}`, // may instead specify via env, see below
    //     concurrency: 5, // default, see using markdown and attachments for more information
    //     tables: [
    //       {
    //         baseId: `${process.env.AIRTABLE_BASE_ID}`,
    //         tableName: `OldGear_Newsletter`
    //       },
    //       // {
    //       //   baseId: `${process.env.AIRTABLE_BASE_ID}`,
    //       //   tableName: `LeadForm`
    //       // }
    //     ]
    //   }
    // },
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: 'old-gear',
        accessToken: `${process.env.API_KEY}`,
        // Get the correct URLs in blog posts
        // linkResolver: () => prismicLinkResolver,
        // PrismJS highlighting for labels and slices
        htmlSerializer: () => prismicHtmlSerializer,
        shouldDownloadImage: () => true,
        schemas: {
          navigation: require('./src/schemas/navigation.json'),
        },
      },
    },
    'gatsby-plugin-lodash',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'config/typography.js',
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: website.googleAnalyticsID,
      },
    },
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: website.title,
        short_name: website.titleAlt,
        description: website.description,
        start_url: `/`,
        background_color: website.backgroundColor,
        theme_color: website.themeColor,
        display: 'standalone',
        icon: website.favicon,
      },
    },
    // Must be placed at the end
    'gatsby-plugin-offline',
    'gatsby-plugin-netlify',
  ],
}
