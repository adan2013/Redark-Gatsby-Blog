module.exports = {
  siteMetadata: {
    title: `REDARK - Poradniki, Testy, Recenzje`,
    description: `Redark.pl`,
    author: `adan2013`,
  },
  plugins: [
    `gatsby-plugin-fontawesome-css`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Anton`
          }
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `redark`,
        start_url: `/`,
        background_color: `#f2f2f2`,
        theme_color: `#d40000`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
