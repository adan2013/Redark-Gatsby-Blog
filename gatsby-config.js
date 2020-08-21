module.exports = {
  siteMetadata: {
    siteUrl: `https://beta.redark.pl`,
    title: `REDARK - Poradniki, Testy, Recenzje`,
    description: `Witryna poświęcona tematyce IT zawierająca poradniki oraz recenzje sprzętu elektronicznego`,
    author: `adan2013`,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-htaccess',
      options: {
        https: true
      }
    },
    `gatsby-plugin-fontawesome-css`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-styled-components-dark-mode`,
      options: {
        light: require(`${__dirname}/src/themes.js`).light,
        dark: require(`${__dirname}/src/themes.js`).dark,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 450,
              tracedSVG: true,
              quality: 95
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `redark`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Anton']
        }
      }
    },
    {
      resolve: `gatsby-transformer-sharp`,
      options: {
        checkSupportedExtensions: false,
      },
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `REDARK`,
        short_name: `Redark`,
        start_url: `/`,
        background_color: `#f2f2f2`,
        theme_color: `#d40000`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-sitemap`
  ],
}
